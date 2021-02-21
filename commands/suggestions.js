const Discord = require("discord.js");
const human = require("humanize");
const paginationEmbed = require("discord.js-pagination");
module.exports = {
  name: "suggestions",
  description: "Finds a channel in the server called suggestions and then creates the channel",
  aliases: ["suggest", "suggestion", "suggests"],
  execute(message, args, client) {
    message.delete()
    const suggestion = args.slice(1).join(" ")
    if(!suggestion) return message.reply("You must enter some content!")
    const suggestchannel = message.guild.channels.cache.find(c => c.name === 'suggestions');
    if(!suggestchannel) {
        return message.reply("Can't find a channel called `suggestions`!")
    }

        const suggestembed = new Discord.MessageEmbed()
            .setColor(message.author.displayColor)
            .addFields({
                name: `Suggested by ${message.author.tag}`,
                value: `${suggestion}`
            })
            suggestchannel.send(suggestembed)
  
    },
};