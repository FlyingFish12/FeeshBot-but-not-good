const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
const fs = require('fs'); 
const prefix = 'f?';
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
                const command = require(`./commands/${file}`);

                client.commands.set(command.name, command);
}

    client.once('ready', () => {
        console.log('Online!');
        const activities_list = [
                "Say \"F?Help\" To Learn My Commands!", 
                "Playing Games With People!",
                "Finding Interesting Facts...",
                "Test Your Knowledge With \"F?Trivia\"!"
                ];
        setInterval(() => {
          const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
          client.user.setActivity(activities_list[index]);
          type: `PLAYING`
      }, 15000);
});
  
        client.on('message', message => {
  
          if(!message.content.toLowerCase().startsWith(`${prefix}`)) return;
          if (message.author.bot) return;
      
            const args = message.content.trim().split(/ +/g);
        
            const commandName = args[0].slice(prefix.length).toLowerCase();
            const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        
          
         if(!command) return;
        
        command.execute(message, args, client);
        
    });
client.on("guildCreate", guild => {
              const NewGuildEmbed = new Discord.MessageEmbed()
                      .setTitle('Added To New Server!')
                      .setDescription(`I have been added to a new server! \n Server name is ${guild.name} (id: ${guild.id}). \n This server has ${guild.memberCount} members!`)
                const logschannel = client.channels.fetch('777203585825112085');
        logschannel.send(NewGuildEmbed)
})

client.login(process.env.BOT_TOKEN);
