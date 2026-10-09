const http = require('http');
const fs = require('fs');

const outputPath = 'C:\\Users\\Mubin\\.gemini\\antigravity-ide\\brain\\76825928-2e4c-4f03-a882-2802ddc3bacb\\true_mobile_390_full.png';

async function run() {
  const tabs = await new Promise((resolve, reject) => {
    http.get('http://localhost:9222/json', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });

  const pageTab = tabs.find(t => t.type === 'page' && t.url.includes('localhost:3000')) || tabs.find(t => t.type === 'page');
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
  await send('Page.enable');
  await send('DOM.enable');

  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
    mobile: true
  });

  await send('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 2000));

  const metrics = await send('Page.getLayoutMetrics');
  const height = Math.ceil(metrics.contentSize ? metrics.contentSize.height : 10000);
  console.log('Detected full page height on mobile:', height);

  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: height,
    deviceScaleFactor: 1,
    mobile: true
  });

  await new Promise(r => setTimeout(r, 1000));

  const screenshot = await send('Page.captureScreenshot', {
    format: 'png',
    clip: { x: 0, y: 0, width: 390, height: height, scale: 1 },
    captureBeyondViewport: true
  });

  fs.writeFileSync(outputPath, Buffer.from(screenshot.data, 'base64'));
  console.log('Saved full mobile screenshot:', outputPath);

  ws.close();
}

run().catch(console.error);
