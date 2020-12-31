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
                message.client.users.fetch(message.content.split(" ")[1]).then((user)=>{
                    const avatarembed = new Discord.MessageEmbed()
                      .setColor(`#DA005A`)
                      .setTitle(`Avatar`)
                      .setImage(user.displayAvatarURL({dynamic: true, size: 1024}));
                
                    message.channel.send(avatarembed);
                  }).catch(()=>{
                    const avatarperson = message.mentions.users.first() || message.author
                    const avatarembed = new Discord.MessageEmbed()
                      .setColor(`#DA005A`)
                      .setTitle(`Avatar`)
                      .setImage(avatarperson.displayAvatarURL({dynamic: true, size: 1024}));
                
                    message.channel.send(avatarembed);
                  });
                }
                avatar(message);

    }
}