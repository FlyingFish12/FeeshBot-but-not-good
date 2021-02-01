const { MessageEmbed, Discord } = require("discord.js");
const human = require("humanize");
const paginationEmbed = require("discord.js-pagination");
const https = require('https');
module.exports = {
  name: "meme",
  description: "Gets a random meme from reddit",
  aliases: ["m"],
  execute(message, args, client) {
    https.get('https://api.macedon.ga/reddit/random/memes', (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
          data += chunk;
      });
      resp.on('end', () => {
          var res = JSON.parse(data);
          const embed = new Discord.MessageEmbed()
              .setColor(message.member.displayColor)
              .setTitle(res.title)
              .setURL(res.permalink)
              .setImage(res.image)
              .setTimestamp()
              .setFooter(`Requested by ${message.author.username}`)
          message.channel.send(embed);
      });
  });
  }
};