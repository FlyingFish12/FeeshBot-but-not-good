const Discord = require('discord.js');
module.exports = {
    name: 'support',
    description: "this is a command to get the support server",
    aliases: ['support', 'error','bugs'],
    execute(message, args){
      const Discord = require('discord.js');
      const supportembed = new Discord.MessageEmbed()
            .setColor('#FF5733')
            .setTitle("Want Some Help?")
            .setDescription("**If You Want Some Support Join [This Server](https://discord.gg/TJUFyfdc9b)**")
    message.channel.send(supportembed)
  }
}
