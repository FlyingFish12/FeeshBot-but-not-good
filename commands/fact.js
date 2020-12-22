const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports ={
    name: 'fact',
    description: "A fact command",
    aliases: ['facts', 'fct'],
    execute(message,args,client){
        const Fact = ["Fun Fact - The densest material on earth is Osmium.",
               "Fun Fact - The longest river is the Nile. ",
               "Fun Fact - The biggest river in terms of water transport is the Amazon. ",
               "Fun Fact - The highest mountain is Mount Everest in Nepal. ",
               "Fun Fact - The highest mountain that’s partially under water is the Mauna Kea in Hawaii.",
               "Fun Fact - The Soviet Union collapsed in 1991. ",
               "Fun Fact - The world's largest company by revenue is Walmart. ",
               "Fun Fact - The biggest city in the World is Tokyo. ",
               "Fun Fact - The hardest mineral is Diamond. ",
               "Fun Fact - Around 97% of Uruguay’s energy is renewable. ",
               "Fun Fact - The biggest empire to ever exist was the British Empire. ",
               "Fun Fact - The most venomous snake is the Inland Taipan. ",
               "Fun Fact - A man once ate an entire plane. ",
               "Fun Fact - Voyager 1 and 2 were both launched in 1977.",
               "Fun Fact - The tallest trees are Sequoias.",
               "Fun Fact - The tallest building is the Burj Khalifa in Dubai.",
               "Fun Fact - The blue whale is the heaviest animal to ever exist. ",
               "Fun Fact - The blue ringed octopus has enough venom to kill 10 adult humans.",
               "Fun Fact - The oldest person was a French woman who died at the age of 122.",
               "Fun Fact - The tallest man was Rovert Wadlow at 2,72 meters.",
               "Fun Fact - The heaviest person was 635 kg.",
               "Fun Fact - Tulips originate from Turkey and not from the Netherlands.",
               "Fun Fact - Antarctica is the only country that is also a continent.",
               "Fun Fact - Penguins are able to drink salt water instead of normal water.",
               "Fun Fact - The star closest to Earth is the Sun.",
               "Fun Fact - The banana's fruit is more slippery than the peel.",
               "Fun Fact - Jellyfish do not have brains or a nervous system.",
               "Fun Fact - Avocados were named after reproductive organs",
               "Fun Fact - Monday is the day of the week where the most heart attacks happen",
               "Fun Fact - There are more possible chess games than atoms in the entire universe.",
               "Fun Fact - There are about 10 quintillion individual ants on earth.",
               "Fun Fact - Movies needed to clarify that they're fiction because of a 1930s lawsuit that traces back to none other than Rasputin.",
               "Fun Fact - The great pyramid of Giza weighs 16 Empire state buildings.",
               "Fun Fact - The sun can fit 100 Earths in it.",
               "Fun Fact - Humans are radioactive as bananas.",
               "Fun Fact - All pandas from zoos originate from China.",
               "Fun Fact - If you look at the sun for too long, the light can penetrate your eyes and your retinal tissue. No good!",
               "Fun Fact - Peanuts are not nuts",
               "Fun Fact - The Creator of the Pringles Can is Buried in One",
               "Fun Fact - A Million Earths Would Fit Inside the Sun."
       ];
       const randomFact = Fact[Math.floor(Math.random() * Fact.length)];
 
       message.channel.send(randomFact + ` - Requested by ${message.author.username}`);


    }
}