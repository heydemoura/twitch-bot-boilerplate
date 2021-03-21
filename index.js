const tmi = require('tmi.js');
require('dotenv').config();

const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true,
  },
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.TWITCH_OATH_TOKEN,
  },
  channels: ['heydelicias']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  if (message.toLocaleLowerCase() === 'franquia') {
    client.say(channel, `@${tags.username} acertou!`);
  } 

  if (self || !message.startsWith('!')) return;

  const args = message.slice(1).split(' ');
  const command = args.shift().toLowerCase();

  if(message.toLowerCase() === "!hello") {
    client.say(channel, `@${tags.username}, bem vindo!`);
  }
});
