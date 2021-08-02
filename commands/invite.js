const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports={
    name: 'invite',
    description: "An invite command",
    aliases: ['botinvite', 'inv'],
    execute(message,args,client){
        const InviteEmbed = new Discord.MessageEmbed()
        .setColor(`#DA005A`)
        .setTitle("Invite me to your server today!")
        .setDescription("[This Link Here](https://discord.com/oauth2/authorize?client_id=735918313921708053&permissions=268823799&scope=bot)")
        .setFooter("Everyone needs a little Feesh in their lives")
        .setTimestamp()
message.channel.send(InviteEmbed)                

    }
}