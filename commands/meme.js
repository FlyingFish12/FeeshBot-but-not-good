const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
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
          const MemeEmbed = new Discord.MessageEmbed()
              .setColor(message.member.displayColor)
              .setTitle(res.title)
              .setURL(res.permalink)
              .setImage(res.image)
              .setTimestamp()
              .setFooter(`Requested by ${message.author.username}`)
          message.channel.send(MemeEmbed);
      });
  });
  }
};