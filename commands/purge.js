const { MessageEmbed, Discord } = require("discord.js");
const human = require("humanize");
const paginationEmbed = require("discord.js-pagination");
module.exports = {
  name: "purge",
  description: "Deletes up to 100 messages",
  aliases: ["p", "pur", "clear"],
  execute(message, client) {
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);
    
      if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('⚠️ Insufficient permissions!');
      
      let deleteAmount;
    
      if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('⚠️ Invalid number!') }
    
      if (parseInt(args[0]) > 100) {
          return message.reply('⚠️ You can only delete 100 messages at a time!')
      } else {
          deleteAmount = parseInt(args[0]);
      }
    
      message.channel.bulkDelete(deleteAmount + 1, true);
      message.reply(`**Successfully** Deleted **${deleteAmount}** Messages.`)
    },
};