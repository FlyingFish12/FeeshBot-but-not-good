const { MessageEmbed, Discord } = require("discord.js");
const human = require("humanize");
const paginationEmbed = require("discord.js-pagination");
module.exports = {
  name: "recordfact",
  description: "An worldrecord fact command",
  aliases: ['Record', 'worldrecord', 'worldrecords', 'recordfacts', 'rf'],
  execute(message, args, client) {
    const jsonData = require("../arrays/rcd.json");
    const records = Object.values(jsonData);
    const randomRecord = records[parseInt(Math.random() * records.length)];

    message.channel.send(randomRecord);
  },
};