const qrcode = require('qrcode-terminal');
const fs = require('fs');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
  authStrategy: new LocalAuth({}),
});

client.on('authenticated', (session) => {
  console.log('AUTHENTICATED', session);
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

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
