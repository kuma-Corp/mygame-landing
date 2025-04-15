const express = require('express');
const app = express();
const port = 3000;

// ここは使わない（EC2では getLocalIP() は不適）
const host = '0.0.0.0';

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, host, () => {
  console.log(`Server running at http://<YOUR-EC2-PUBLIC-IP>:${port}`);
});
