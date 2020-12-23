const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports ={
    name: 'lovemeter',
    description: "A lovemeter command",
    aliases: ['lovemeter','love','l'],
    execute(message,args,client){
        const LoveOMeter = [
            {description: '100% Love', inHearts: ['💖💖💖💖💖💖💖💖💖💖']},
            {description: '95% Love', inHearts: ['💖💖💖💖💖💖💖💖💖❤️']},
            {description: '90% Love', inHearts: ['💖💖💖💖💖💖💖💖💖💔']},
            {description: '85% Love', inHearts: ['💖💖💖💖💖💖💖💖❤️💔']},
            {description: '80% Love', inHearts: ['💖💖💖💖💖💖💖💖💔💔']},
            {description: '75% Love', inHearts: ['💖💖💖💖💖💖💖❤️💔💔']},
            {description: '70% Love', inHearts: ['💖💖💖💖💖💖💖💔💔💔']},
            {description: '65% Love', inHearts: ['💖💖💖💖💖💖❤️💔💔💔']},
            {description: '60% Love', inHearts: ['💖💖💖💖💖💖💔💔💔💔']},
            {description: '55% Love', inHearts: ['💖💖💖💖💖❤️💔💔💔💔']},
            {description: '50% Love', inHearts: ['💖💖💖💖💖💔💔💔💔💔']},
            {description: '45% Love', inHearts: ['💖💖💖💖❤️💔💔💔💔💔']},
            {description: '40% Love', inHearts: ['💖💖💖💖💔💔💔💔💔💔']},
            {description: '35% Love', inHearts: ['💖💖💖❤️💔💔💔💔💔💔']},
            {description: '30% Love', inHearts: ['💖💖💖💔💔💔💔💔💔💔']},
            {description: '25% Love', inHearts: ['💖💖❤️💔💔💔💔💔💔💔']},
            {description: '20% Love', inHearts: ['💖💖💔💔💔💔💔💔💔💔']},
            {description: '15% Love', inHearts: ['💖❤️💔💔💔💔💔💔💔💔']},
            {description: '10% Love', inHearts: ['💖💔💔💔💔💔💔💔💔💔']},
            {description: '5% Love', inHearts: ['❤️💔💔💔💔💔💔💔💔💔']},
            {description: '0% Love', inHearts: ['💔💔💔💔💔💔💔💔💔💔']}
            ];
            
        const chosenLoveOMeter = LoveOMeter[Math.floor(Math.random() * LoveOMeter.length)];
        const {
                users,
                mentions            
        } = message;
        const LoveOMeterEmbed = new Discord.MessageEmbed()

        if (!mentions.users.size) {
                LoveOMeterEmbed.setColor(`#123456`)  
                LoveOMeterEmbed.setTitle(`Love o Meter`)
                LoveOMeterEmbed.setDescription(`**Do You Love Yourself?** \n**${chosenLoveOMeter.description}** - ${chosenLoveOMeter.inHearts}`)
                LoveOMeterEmbed.setFooter('This Is Very Accurate');
        } else {
        LoveOMeterEmbed.setColor(`#123456`)  
        LoveOMeterEmbed.setTitle(`Love o Meter`)
        LoveOMeterEmbed.setDescription(`**${message.author.username} x ${mentions.users.first().username} \n**${chosenLoveOMeter.description}** - ${chosenLoveOMeter.inHearts}`)
        LoveOMeterEmbed.setFooter('This Is Very Accurate');
        }                
        message.channel.send(LoveOMeterEmbed);

    }
}