const { MessageEmbed, version: djsversion } = require("discord.js");
const Discord = require("discord.js");
const version = require('../package.json');
const human = require("humanize");
const paginationEmbed = require("discord.js-pagination");
const moment = require("moment");
const m = require("moment-duration-format");
let cpuStat = require("cpu-stat")
let os = require('os')

module.exports = {
  name: "botinfo",
  description: "A command that shows the bots information",
  aliases: ["bi", "info"],
  execute(message, args, client) {
    const guilds = client.guilds.cache.array();

    const duration = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

    const botinfoEmbed = new Discord.MessageEmbed()
      .setColor(`#454ade`)
      .setTitle(`Feesh Bot's Info`)
      .addFields(
        { name: `Bot Owner`, value: `\`\`\`Fefe#9196\`\`\``, inline: true },
        {
          name: `Servers`,
          value: `\`\`\`${guilds.length}\`\`\``,
          inline: true,
        },
        { name: `Framework`, value: `\`\`\`Discord.js\`\`\``, inline: true },
        { name: `Node.js Version`, value: `\`\`\`${process.version}\`\`\``, inline: true },
        { name: `Discord.js Version`, value: `\`\`\`${djsversion}\`\`\``, inline: true },
      )
      .addField("API Latency", `\`\`\`${(message.client.ws.ping)}ms\`\`\``)
      .addField("Uptime ", `\`\`\`${duration}\`\`\``, true)
      .addField("Users", `\`\`\`${message.client.users.cache.size}\`\`\``, true)
      .addField("Mem Usage", `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\`\`\``, true)

      .setTimestamp()
      .setFooter(`ID:735918313921708053`);
    message.channel.send(botinfoEmbed);
  },
};
