const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports ={
    name: 'say',
    description: "A Say Command",
    aliases: ['say','s','write', 'repeat'],
    execute:async(message, args, client) => {

        let description = args.slice(1).join(" ");

            if (!description) {
            return message.channel.send("Can't repeat nothing, nothing.");
            }

    try {

        message.delete()

            const sayembed = new Discord.MessageEmbed()
                .setColor(`RANDOM`)
                .setDescription(description);

            message.channel.send(sayembed)
        
        } catch (err) {
            console.log(err)
            message.channel.send('I\'m a failure and can\'t speak ;-;')
        }
    }
}