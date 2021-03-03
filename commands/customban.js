const { MessageEmbed, Discord } = require("discord.js");
const human = require("humanize");
const paginationEmbed = require("discord.js-pagination");
module.exports = {
  name: "customBan",
  description: "ban just for me",
  aliases: ["cb", "cbt"],
  execute(message, args, client) {
        if(!message.author.id === '427476318050058251') return message.channel.send('You\'re not good enough for this lol')

        const member = message.mentions.members.first();

        if(!member) return;
        
        member.ban().then(member => {
            const custbanEmbed = new Discord.MessageEmbed()
                .setColor(`#800020`)
                .setTitle(`Hah, Noob!`)
                .setDescription(`Lmao, ${target} just got banned noob.`)
                .setFooter('Git gud fam.')

        message.channel.send(custbanEmbed)
    })
  },
};