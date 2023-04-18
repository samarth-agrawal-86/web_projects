//const qrcode = require('qrcode-terminal');
const express = require('express');
const qrcode = require('qrcode');
const fs = require('fs');
const app = express();
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
  authStrategy: new LocalAuth({}),
});

app.get('/', function (req, res) {
  client.on('authenticated', (session) => {
    console.log('AUTHENTICATED', session);
  });

  client.on('qr', async (qr) => {
    const qrImage = await qrcode.toDataURL(qr);
    const html = `<img src="${qrImage}">`;
    res.send(html);
  });
});

// client.on('qr', (qr) => {
//   qrcode.generate(qr, { small: true });
// });

client.on('message', (message) => {
  if (message.body === '!ping') {
    console.log(message);
    client.sendMessage(message.from, 'pong');
  }
});

client.on('ready', () => {
  console.log('Client is ready!');
  console.log('Logged in as: ' + client.info.pushname);

  client.getChats().then((chats) => {
    console.log(chats[0]);
  });
});

client.initialize();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
