const Discord = require(`discord.js`);
const client = new Discord.Client();
const fs = require('fs'); 
const prefix = 'F?';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
                const command = require(`./commands/${file}`);

                client.commands.set(command.name, command);
}

    client.once('ready', () => {
        console.log('Online!');
});
  
        client.on('message', message => {
  
          if(!message.content.startsWith(`${prefix}`)) return;
          if (message.author.bot) return;
      
            const args = message.content.trim().split(/ +/g);
        
            const commandName = args[0].slice(prefix.length).toLowerCase();
            const command = client.commands.get(commandName) || Client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        
          
         if(!command) return;
        
        command.execute(message, args, client);
        
    });
    client.on("guildCreate", guild => {
      const BotOwner = `427476318050058251`;
              const JoinEmbed = new Discord.MessageEmbed()
                      .setTitle('Added To New Server!')
                      .setDescription(`I have been added to a new server! \n Server name is ${guild.name} (id: ${guild.id}). \n This server has ${guild.memberCount} members!`)
      BotOwner.send(JoinEmbed)
})
    //Add any other events
client.login() //put inside the brackets whatever method you use for the token 
