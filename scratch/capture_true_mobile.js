const http = require('http');
const fs = require('fs');
const path = require('path');

const targetUrl = process.argv[2] || 'http://localhost:3000';
const outputPath = process.argv[3] || 'mobile_390_screenshot.png';

async function run() {
  const tabs = await new Promise((resolve, reject) => {
    http.get('http://localhost:9222/json', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });

  let pageTab = tabs.find(t => t.type === 'page' && t.url.includes('localhost:3000'));
  if (!pageTab) {
    pageTab = tabs.find(t => t.type === 'page');
  }

  if (!pageTab) {
    console.error('No page tab found');
    process.exit(1);
  }

  console.log('Connecting to tab:', pageTab.title, pageTab.webSocketDebuggerUrl);
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

  let id = 1;
  const send = (method, params = {}) => {
    return new Promise((resolve) => {
      const msgId = id++;
      const handler = (event) => {
        const res = JSON.parse(event.data);
        if (res.id === msgId) {
          ws.removeEventListener('message', handler);
          resolve(res.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  };

  await new Promise((resolve) => ws.addEventListener('open', resolve));

  // Enable Page and DOM
  await send('Page.enable');
  await send('DOM.enable');

  // Set mobile device metrics: 390x844 (iPhone 14/15/16 standard mobile viewport)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
    screenOrientation: { angle: 0, type: 'portraitPrimary' }
  });

  // Navigate or reload
  await send('Page.navigate', { url: targetUrl });
  await new Promise(r => setTimeout(r, 1500));

  // Check for any horizontal overflow
  const evalResult = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const docWidth = document.documentElement.offsetWidth;
        const bodyWidth = document.body.offsetWidth;
        const scrollWidth = document.documentElement.scrollWidth;
        const overflowing = [];
        document.querySelectorAll('*').forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.right > window.innerWidth + 1) {
            overflowing.push({
              tag: el.tagName,
              id: el.id,
              className: el.className.toString().substring(0, 50),
              right: rect.right,
              width: rect.width
            });
          }
        });
        return {
          windowInnerWidth: window.innerWidth,
          docWidth,
          bodyWidth,
          scrollWidth,
          overflowCount: overflowing.length,
          topOverflow: overflowing.slice(0, 5)
        };
      })()
    `,
    returnByValue: true
  });

  console.log('Overflow check:', JSON.stringify(evalResult.value, null, 2));

  // Capture Screenshot
  const screenshot = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: false
  });

  fs.writeFileSync(outputPath, Buffer.from(screenshot.data, 'base64'));
  console.log('Screenshot saved to:', outputPath);

  // Capture full page screenshot
  const fullPageScreenshot = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true
  });
  const fullPagePath = outputPath.replace('.png', '_full.png');
  fs.writeFileSync(fullPagePath, Buffer.from(fullPageScreenshot.data, 'base64'));
  console.log('Full page screenshot saved to:', fullPagePath);

  ws.close();
  process.exit(0);
}

run().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
