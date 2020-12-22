const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports ={
    name: 'fbs',
    description: "A servers command",
    aliases: ['servers'],
    execute(message,args,client){
        if (!isBotOwner) {
            message.channel.send(`Your Not Good Enough For This Command!`);
    } else {
    const guilds = client.guilds.cache.array()
    const generateEmbed = start => {
            const current = guilds.slice(start, start + 10)
          
            // you can of course customise this embed however you want
            const embed = new Discord.MessageEmbed()
              .setTitle(`Showing guilds ${start + 1}-${start + current.length} out of ${guilds.length}`)
            current.forEach(g => embed.addField(g.name, `**Owner:** ${g.owner.user.tag}`))
            return embed
          }
          
          // edit: you can store the message author like this:
          const author = message.author
          
          // send the embed with the first 10 guilds
          message.channel.send(generateEmbed(0)).then(message => {
            // exit if there is only one page of guilds (no need for all of this)
            if (guilds.length <= 10) return
            // react with the right arrow (so that the user can click it) (left arrow isn't needed because it is the start)
            message.react('➡️')
            const collector = message.createReactionCollector(
              // only collect left and right arrow reactions from the message author
              (reaction, user) => ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id === author.id,
              // time out after a minute
              {time: 60000}
            )
          
            let currentIndex = 0
            collector.on('collect', reaction => {
              // remove the existing reactions
              message.reactions.removeAll().then(async () => {
                // increase/decrease index
                reaction.emoji.name === '⬅️' ? currentIndex -= 10 : currentIndex += 10
                // edit message with new embed
                message.edit(generateEmbed(currentIndex))
                // react with left arrow if it isn't the start (await is used so that the right arrow always goes after the left)
            if (currentIndex !== 0) await message.react('⬅️')
            // react with right arrow if it isn't the end
            if (currentIndex + 10 < guilds.length) message.react('➡️')
              
})
})
})
}
    }
}