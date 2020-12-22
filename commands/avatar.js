const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
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
            const avatarembed = new Discord.MessageEmbed()

                    .setColor(`#DA005A`)
                    .setTitle(`Avatar`)
            if (!mentions.users.size) {
                    avatarembed.setDescription("⚠️ Please mention a member in the server, for example `@Fefe`.");
            } else {
                    avatarembed.setImage(mentions.users.first().displayAvatarURL({dynamic: true, size: 1024}))
            }
            message.channel.send(avatarembed);
    }
    avatar(message); 

    }
}