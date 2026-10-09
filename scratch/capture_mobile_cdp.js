const http = require('http');
const fs = require('fs');
const path = require('path');

// Query Chrome tabs to find the page
http.get('http://localhost:9222/json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const tabs = JSON.parse(data);
      const pageTab = tabs.find(t => t.type === 'page' && t.url.includes('localhost:3000'));
      if (pageTab) {
        console.log('Found page tab:', pageTab.webSocketDebuggerUrl);
      } else {
        console.log('Available tabs:', tabs.map(t => ({ title: t.title, url: t.url })));
      }
    } catch (e) {
      console.error(e);
    }
  });
}).on('error', (err) => {
  console.log('CDP not running on 9222:', err.message);
});
