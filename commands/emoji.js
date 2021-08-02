const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const fs = module.require("fs");
const ms = module.require("ms")

module.exports = {
  name: "emoji",
  description: "An unmute command",
  aliases: ["se", "svre", "serveremotes", "emotes", "emojis", "emote"],
  execute:async(message, args, client) => {

    let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;

    function Emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach((emoji) => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });
    let Embed = new MessageEmbed()
      .setTitle(`${message.guild.name} - Emote count : ${OverallEmojis}`)
      .setDescription(`Animated (${Animated}) :\n${EmojisAnimated}\n\nStandard (${EmojiCount}) :\n${Emojis}`)
      .setColor('RANDOM');

    if (Embed.length > 2000) {
      return message.channel.send(`Embed limit reached! (You have too many emotes ;-; )`);
    } else {
      message.channel.send(Embed);
    }
  }
}