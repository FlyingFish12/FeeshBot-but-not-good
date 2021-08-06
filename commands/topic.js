const { MessageEmbed, Discord } = require("discord.js");
const human = require("humanize");
const paginationEmbed = require("discord.js-pagination");
module.exports = {
  name: "topic",
  description: "A topic command",
  aliases: ['tpc', 'topics'],
  execute(message, args, client) {
    const jsonData = require("../arrays/topics.json");
    const topics = Object.values(jsonData);
    const randomTopic = topics[parseInt(Math.random() * topics.length)];
    message.channel.send(randomTopic);
  },
};
