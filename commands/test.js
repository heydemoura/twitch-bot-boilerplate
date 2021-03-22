module.exports = {
  name: 'test',
  command: '!test',
  init: (client, channel, tags, message, self) => {
    client.say(channel, `@${tags.username} seja bem vindo!`);
  },
}
