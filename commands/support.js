const Discord = require('discord.js');
module.exports = {
    name: 'support',
    description: "this is a command to get the support server",
    aliases: ['support', 'error','bugs'],
    execute(message, args){
      const Discord = require('discord.js');
      const Bug_Capture = client.emojis.cache.get('801786570645962753')
      const supportembed = new Discord.MessageEmbed()
            .setColor('#FF5733')
            .setTitle("Want Some Help?")
            .setDescription(`**If You Want Some Support Or Spot A Bug Join [This Server](https://discord.gg/TJUFyfdc9b)** ${Bug_Capture}`)
    message.channel.send(supportembed)
  }
}
