const express = require('express');
const os = require('os');
const app = express();
const port = 3000;

// 動的にローカルIPを取得（最初に見つけたIPv4 & 非内部インターフェース）
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name in interfaces) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '127.0.0.1';
}

const host = getLocalIP();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

