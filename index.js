const tmi = require('tmi.js');
require('dotenv').config();

const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true,
  },
  identity: {
    username: 'delicinhabot',
    password: process.env.TWITCH_OATH_TOKEN,
  },
  channels: ['heydelicias']
});

const gameStatus = {
  word: 'franquia',
}

client.connect()

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
