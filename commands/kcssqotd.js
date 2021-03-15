const { MessageEmbed, Discord } = require("discord.js");
const human = require("humanize");
const paginationEmbed = require("discord.js-pagination");
module.exports = {
  name: "kcssqotd",
  description: "Pings the KCSS QOTD role",
  aliases: ["qotd"],
  execute:async(message, args, client) => {
      const qotdManager = message.guild.roles.cache.find(qR => qR.id === "805718486710091776");
        if(!message.channel.id === '710883806130733176') return message.channel.send('You can\'t do this here.')
        if(!message.author.roles.cache.has(qotdManager.id)) return message.channel.send('You can\'t do this.')

        message.channel.send('<@821101389710622767>')
    },
};