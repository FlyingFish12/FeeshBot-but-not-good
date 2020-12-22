const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports ={
    name: 'sportfact',
    description: "A sportfact command",
    aliases: ['sport', 'sportfacts', 'sf'],
    execute(message,args,client){

        const Sprt = ["Sport Fact - The sport of badminton was initially called 'Poona'.",
               "Sport Fact - Anna Kopchovsky, the first woman to cycle around the world in 1894, had only learned how to cycle a few days before she set off. She covered the entire distance in 15 months and received a reward of 10,000 dollars.",
               "Sport Fact - The 2022 World Soccer Championship will be opened in Lusail (Qatar), a city which did not exist till recently.",
               "Sport Fact - During the Olympic Games in China, Usain Bolt ate only chicken nuggets, as it was the only meal he recognized from home. Ultimately, he won three gold medals with this diet.",
               "Sport Fact - During the 2002 Soccer World Cup, Ahn Jung-hwan from South Korea scored a goal against Italy in injury time, knocking the Italians out of the World Cup. The next day, his contract with his Italian home club was terminated because the owner said he could not pay the person who had ruined Italian football.",
               "Sport Fact - The boxing ring is called a 'ring' because it used to be round. Instead of its present form, the spectators used to stand in a circle around the fighters when the sport first became popular.",
               "Sport Fact - The world record for the most consecutive push-ups was set in 1980 by Minoru Yoshida from Japan who managed to do 10,507 in a row.",
               "Sport Fact - Among the 30 fastest 100-meter sprints in the history of the sport, there are only nine that are not related to doping. All nine runs were completed by Usain Bolt.",
               "Sport Fact - Each year about 100 million bikes are produced worldwide.",
               "Sport Fact - James Fixx, the creator of the word 'jogging' died from a heart attack while jogging.",
               "Sport Fact - 'Fox tossing' was a popular sport in the 16th century in which two people held a 23-foot-long cloth on both sides and then pulled it tight as soon as a fox ran over the cloth so that it flew into the air. The game continued until the animal broke its bones when it hit the ground and was then killed by a hunter.",
               "Sport Fact - Professional US swimmer Michael Phelps has won more gold medals than 80 percent of all countries in the history of the Olympic Games.",
               "Sport Fact - For car races, Nissan only uses the number 23 on their vehicles, since in Japanese number two is pronounced as “ni” and three as “san”. Together this gives “ni-san”.",
               "Sport Fact - During the 1904 Summer Olympics in St. Louis, the American Frederick Lorz was the first to reach the finish line of the marathon race. It turned out, however, that he had covered about half the distance by car.",
               "Sport Fact - American professional basketball player Shaquille O’Neal scored only a single three-point shot throughout his entire professional career.",
               "Sport Fact - From 1912 to 1948 architecture was an Olympic discipline.",
               "Sport Fact - The game 'Quidditch' from the Harry Potter novels is now a recognized sport in our world, with its own leagues and even regular world championships.",
               "Sport Fact - Octopus-Wrestling was a popular trend in the sixties. A diver grapples with an octopus in shallow water and tries to bring it to the surface.",
               "Sport Fact - From 2015 to 2016, Englishman Ben Smith ran 401 marathons on 401 days to raise money for the victims of bullying. With his '401 Challenge' he set a world record and covered a total of 10,506 miles.",
               "Sport Fact - The word 'gym' comes from Greek and translates to 'place of the naked.'",
               "Sport Fact - In the history of the United States there have been 17 Americans who ran a marathon in less than two hours and ten minutes. In October 2011 this was achieved by 32 Kenyans.",
               "Sport Fact - In 1949 a boxing match was held between boxer Gus Waldorf and a bear. The bear was given a muzzle and boxing gloves to create 'fair' conditions for both fighters. In the end, however, it was the bear that won.",
               "Sport Fact - Finland has hosted the official 'Wife Carrying World Championship' since 1992. In this competition, men carry their wives as fast as possible over a long obstacle course. In the end, the winner receives his wife’s weight in beer.",
               "Sport Fact - Gladiators in ancient Rome were exclusively fighters who fought against other humans for life and death. People fighting exclusively against animals were called 'Bestiarii'.",
               "Sport Fact - Australian rower Bobby Pearce won the 1928 Olympic Games against eight other competitors, even though he stopped during the race to let ducks pass in front of him.",
               "Sport Fact - In North Korea, basketball is played according to different rules. For example, the team loses points if it doesn’t score on free throws and a dunk scores three points instead of the usual two.",
               "Sport Fact - In 1957 a senior woman had to be brought out of a baseball stadium after being hit in her face by a baseball. When the paramedics were carrying her out, a second ball hit her.",
               "Sport Fact - Reinhold Messner climbed Nanga Parbat, the ninth highest mountain in the world, a total of three times. The first time, his brother died on the way up and he himself lost seven toes. He decided to climb the mountain again and was the first person to do so on his own. On his third ascent, he finally climbed the mountain in memory of his deceased brother, so that both brothers ended up climbing the mountain together – at least symbolically.",
               "Sport Fact - The longest boxing match in the world took place on 6 April 1893 between Andy Bowen and Jack Burke. The fight went on for 110 rounds and lasted for more than seven hours. In the end, both fighters were too tired and exhausted to keep on fighting.",
               "Sport Fact - In 2002, long-distance runner Tom Johnson competed against a horse in an 50-mile race. He ran the distance in five hours and 45 minutes, arriving ten seconds ahead of the horse.",
               "Sport Fact - Only three years after the first football rules were laid down, the hand play was forbidden.",
               "Sport Fact - The official length of a marathon was defined as 26,219 miles because it was exactly the length of the course at the Olympic Games in London in 1908 and not because it corresponds to the historical distance between Athens and Marathon. That distance is only about 24.8 miles.",
               "Sport Fact - Miguel Indurain, five times Tour de France winner, has a resting heart rate of 28 beats per minute.",
               "Sport Fact - In 1923, a dead rider finished first in a horse race in New York. The rider suffered a heart attack during the race and the horse carried the dead body to the finishing line.",
               "Sport Fact - Archer Matt Stutzman holds the world record for the longest shot with a bow and arrow under Olympic conditions. He hit his mark at a distance of 930 feet. What makes this so special is the fact that due to a disability, Matt Stutzman has no arms and therefore uses the bow with his feet.",
               "Sport Fact - When Chinese basketball player Yao Ming first appeared for his new team in Houston, it was celebrated with 8,000 fortune cookies which were distributed to the fans. Ming was more than surprised, as he had never seen a fortune cookie in his life, as fortune cookies are not a Chinese, but an American invention.",
               "Sport Fact - There are no reported incidents of death by dehydration in the history of world running. But there are plenty of cases of people dying because of drinking to much water.",
               "Sport Fact - Since 1896, soccer fields in Germany have to be free of trees.",
               "Sport Fact - Athlete Mark Henry currently holds the world record in “5-Lift-Total”. His personal records in the five disciplines of weightlifting (snatch, clean and jerk, squat, bench press and deadlift) total  3,257.3 pounds, making him officially the strongest person ever to live.",
               "Sport Fact - Kirani James was the first Olympian to win a gold medal for his home country Grenada. His homeland was so proud of it that there was a huge celebration for him and he was rewarded with over 220,000 euros. Today he can even be found on the country’s stamps, a stadium bears his name and his hometown opened a museum about his achievements.",
               "Sport Fact - In order to celebrate her 70th birthday, Kansas City native Chau Smith ran seven marathons on seven continents on seven consecutive days.",
               "Sport Fact - One pound of muscles burns 16,300 calories per year.",
               "Sport Fact - The average distance a man walks on foot during his life is four times around the world."
       ]
 
       const randomSprt = Sprt[Math.floor(Math.random() * Sprt.length)];
 
       message.channel.send(randomSprt + ` - Requested by ${message.author.username}`);
    }
}