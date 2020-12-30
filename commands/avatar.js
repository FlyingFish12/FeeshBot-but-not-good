const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports ={
    name: 'avatar',
    description: "An avatar command",
    aliases: ['av'],
    execute(message,args,client){
        function avatar(message) {
            const {
                    user,
                    mentions
            } = message;
            const avatarperson = mentions.users.first() || mentions.users.first().id
            const avatarembed = new Discord.MessageEmbed()

                    .setColor(`#DA005A`)
                    .setTitle(`Avatar`)
            if (!mentions.users.size) {
                    avatarembed.setDescription("⚠️ Please mention a member in the server, for example `@Fefe`.");
            } else {
                    avatarembed.setImage(avatarperson.displayAvatarURL({dynamic: true, size: 1024}))
            }
            message.channel.send(avatarembed);
    }
    avatar(message); 

    }
}