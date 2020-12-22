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
    //Add any other events
client.login() //put inside the brackets whatever method you use for the token 
