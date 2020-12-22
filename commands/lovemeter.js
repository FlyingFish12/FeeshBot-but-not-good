const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
module.exports ={
    name: 'lovemeter',
    description: "A lovemeter command",
    aliases: ['meter','love','l'],
    execute(message,args,client){
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