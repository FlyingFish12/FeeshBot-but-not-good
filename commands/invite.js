const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
module.exports ={
    name: 'invite',
    description: "An invite command",
    aliases: ['botinvite'],
    execute(message,args,client){
        const InviteEmbed = new Discord.MessageEmbed()
        .setColor(`#DA005A`)
        .setTitle("Invite me to your server today!")
        .setDescription("https://discord.com/api/oauth2/authorize?client_id=735918313921708053&permissions=8&scope=bot")
        .setFooter("Everyone needs a little Feesh in their lives")
        .setTimestamp()
message.channel.send(InviteEmbed)                

    }
}