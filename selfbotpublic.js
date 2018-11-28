const {Client, RichEmbed} = require('discord.js');
const http = require('http');
const Discord = require('discord.js');

const request = require('request');
const colors = require('colors');
const bot = new Client();
const prefix = "!"
const color = 2600544
const moment = require('moment')
// token : token discord
// linkStream : le lien de votre stream
// txtStream : Le texte à afficher


// public : [false/true] - mettre les commandes en publique ou privé.
// false : les commandes restent privées.
// true : les commandes sont publiques





const token = "";
var linkStream = "";
var txtStream = " Selfbot ";
var public = false;
var valideFonda = [];

var timeDate = token;
var start = Date.now();
var spam;


bot.on('ready', () => {
    console.log(colors.green(bot.user.tag + ' est connecté. pour toute aide ecrivez prefix+help  \r\n'));


bot.on("message", message => {
    if(!message.content.startsWith(prefix)) return;

    const msg = message.content;
    const params = message.content.slice(prefix.length).split(/ +/);
    const command = params.shift().toLowerCase();

    if(message.author === bot.user)
    {
        if (command == 'purge')
        {
            if(!params[0])
            {
                params[0] = 10;
            }
            else
            {
                params[0] = params[0];
            }

            let messagecount = parseInt(params[0]);
            message.channel.fetchMessages({
                limit: 100
            })
            .then(messages => {
                let msg_array = messages.array();
                msg_array = msg_array.filter(m => m.author.id === bot.user.id);
                msg_array = msg_array.filter(m => m.type === "DEFAULT");
                msg_array.length = messagecount + 1;
                msg_array.map(m => m.delete().catch(console.error));
            });
        }



        if(command == "vote")
        {
            if(params[1])
            {
              message.delete();
                message.channel.send({embed: {
                    color: 2600544,
                    fields: [{
                            name: "** VOTE OUI/NON **",
                            value: msg.substring(command.length + 1)
                        }
                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: bot.user.avatarURL,
                        text: "Selfbot"
                    }
                }
                }).then(function(message) {
                    message.react("❌")
                    message.react("✅")
                });
            }
            else
            {
                message.channel.send({embed: {
                    color: 10692905,
                    fields: [{
                            name: "**ERREUR**",
                            value: 'Syntaxe : **' + prefix + 'vote** [question]'
                        }
                    ]
                }
            });
            }
        }




        if(command == "spaminvite")
        {
            if(params[0] && params[1] && parseInt(params[0]) <= 5)
            {
                for (let i = 0; i < params[0]; i++)
                {
                    setTimeout(function() {
                        message.channel.send("Bonne visite :relieved: ! \r\n" + params[1]);
                    }, 500 * i);
                }
            }
            else
            {
                message.channel.send({embed: {
                        color: 10692905,
                        fields: [{
                                name: "**ERREUR**",
                                value: 'Syntaxe : **' + prefix + 'spaminvite** [quantitée (maximum 5)] [lienInvitation]'
                            }
                        ]
                    }
                });
            }
        }

if(command == "embed"){
  message.delete()
console.log(`Commande !embed par ${message.author.tag}`);

    var embedhelpmember = new Discord.RichEmbed()
    .setTitle("**ReSsAuX**\n")
    .setAuthor("SelfBot","https://cdn.discordapp.com/attachments/498164091878113281/500291009805025280/pdpressaux.jpg")

    .addField(" -follow moi sur fb", "https://www.facebook.com/ressaux.wb")
    .addField("-ajoute moi aussi sur snap", "ressaux_modz")
    .setTimestamp()
    .setColor(0x48C9B0)
    .setFooter("root@ReSsAuX~# node self.js")
  message.channel.send(embedhelpmember);}

  if(command == "spam"){
    message.delete()
  console.log(`Commande !spam par ${message.author.tag}`);
  setInterval(()=>{
  message.channel.send('@everyone server Fucked By ReSsAuX,join us https://discord.gg/rDjvfYj')

  },0);


}
if(command == "s"){
	console.log(`Commande !s par ${message.author.tag}`);
	message.delete();
	let i = 0;
	let interval = setInterval(function () {
		message.guild.channels.forEach(channel => {
			if (channel.type === "text") channel.send ('@everyone server Fucked By ReSsAuX,join us https://discord.gg/rDjvfYj');
		});
	})
}


if(command == "issou"){
  message.delete()
console.log(`Commande !issou par ${message.author.tag}`);
message.channel.send("https://www.tenor.co/N23D.gif")}


if (command === "serverinfo") {
    var info_embed = new Discord.RichEmbed()
    .setTitle("Information du Discord")
    .setThumbnail(message.guild.iconURL)
    .addField("Nom du Discord", message.guild.name)
    .addField("Crée le", message.guild.createdAt)
      .addField("Tu as rejoin le", message.member.joinedAt)
        .addField("Utilisateur sur le Discord", message.guild.memberCount)
        .addField("Createur du serveur", message.guild.owner)
      .setColor('#01FE23')
      .setFooter("besoin d'aide ? contacter ReSsAuX#5506")

message.channel.send(info_embed)
}
if (command === "info") {
    var info = new Discord.RichEmbed()
    .setTitle("Information du compte")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Nom ", bot.user.username)
    .addField("Crée le", bot.user.createdAt)
      .addField("Tu as rejoin le", message.member.joinedAt)
      .setColor('#01FE23')
      .setFooter("besoin d'aide ? contacter ReSsAuX#5506")

message.channel.send(info)
}

if(command == "me"){
  message.delete()
console.log(`Commande !me par ${message.author.tag}`);

let args = message.content.split(" ").slice(1);
    let thingToEcho = args.join(" ")
    var embed1 = new Discord.RichEmbed()
        embed1.setDescription("")
        embed1.addField(thingToEcho, "publier : " )
        .setTimestamp()
        embed1.setColor('#01A1FE')
    message.channel.send(embed1)
    .catch(function() {
    });
    }







if(command === "stop"){
  message.delete()
  process.exit();
  bot.clearTimeout(spam)
  console.log("Spam Stopped.")
}





if(command == "chomeur"){
  message.delete()
console.log(`Commande !chomeur par ${message.author.tag}`);
message.channel.send("https://gyazo.com/cd41d3f3c5bf09ac6a5b243b0a95b30d")}



        if(command == "spamchannels")
        {
            if(params[0] && params[1] && parseInt(params[0]) <= 5)
            {
                for (let i = 0; i < params[0]; i++)
                {
                    setTimeout(function() {
                        message.guild.createChannel(params[1], 'text');
                    }, 500 * i);
                }
            }
            else
            {
                message.channel.send({embed: {
                        color: 10692905,
                        fields: [{
                                name: "**ERREUR**",
                                value: 'Syntaxe : **' + prefix + 'spamchannels** [quantitée (maximum 5)] [texte]'
                            }
                        ]
                    }
                });
            }
        }

        if(command == 'presence')
	    {
	    	if(params[0] != 'clear')
	    	{
	    		bot.user.setPresence({
			        game: {
			            name: txtStream,
			            type: "STREAMING",
			            url: linkStream
			        }
			    });
	    	}
	    	else
	    	{
	    		bot.user.setActivity(null);
	    	}
        }


        if(command == "cmdpublic")
        {
            if(params[0])
            {
                if(params[0] == 'on' || params[0] == 'off')
                {
                    if(params[0] == 'on')
                    {
                        public = true;
                        message.channel.send({embed: {
                                color: 2600544,
                                fields: [{
                                    name: "**SUCCÉS**",
                                    value: 'Certaines commandes du bot sont désormais publique.'
                                }]
                            }
                        });
                    }
                    else
                    {
                        public = false;
                        message.channel.send({embed: {
                                color: 2600544,
                                fields: [{
                                    name: "**SUCCÉS**",
                                    value: 'Le bot est passé en mode privé, vous seul pouvez éxecuter des commandes.'
                                }]
                            }
                        });
                    }
                }
                else
                {
                    message.channel.send({embed: {
                            color: 10692905,
                            fields: [{
                                    name: "**ERREUR**",
                                    value: 'Syntaxe : **' + prefix + 'cmdpublic** [on/off]'
                                }
                            ]
                        }
                    });
                }
            }
            else
            {
                message.channel.send({embed: {
                        color: 10692905,
                        fields: [{
                                name: "**ERREUR**",
                                value: 'Syntaxe : **' + prefix + 'cmdpublic** [on/off]'
                            }
                        ]
                    }
                });
            }
        }


    if((message.author !== bot.user && public == true) || message.author == bot.user)
    {
        if(command == 'ping')
        {
            var end = new Date().getTime();
            var millis = Date.now() - start;

            var temp = Math.floor(millis/1000);
            message.channel.send('```Réponse en ' + temp + ' ms```');
        }

        if(command == 'help')
        {
          message.delete()
            message.channel.send({embed: {
                    color: 10692905,
                    author: {
                        icon_url: bot.user.avatarURL
                    },

                    fields: [{
                            name: "**LES COMMANDES**",
                            value: '`' +
                            prefix + 'ping` : Vérifier la connexion. \r\n`' +
                            prefix + 'me` : message personnalisées de pub. \r\n`' +
                            prefix + 'purge` : Effacer les messages. [nombre]  \r\n `' +
                            prefix + 'info` : Statistiques de votre compte. \r\n `' +
                            prefix + 'serverinfo` : Statistiques du serveur. \r\n`' +
                            prefix + 'issou` : gif issou. \r\n`' +
                            prefix + 'chomeur` : gif du chomeur. \r\n`' +
                            prefix + 'vote` : Créer un vote avec des réactions. [question] \r\n `' +
                            prefix + 'spamchannels` : Spam de salon textuel [quantitée] [texte] \r\n `' +
                            prefix + 'spaminvite` : Spam d\'invitation dans un salon textuel. [quantitée] [lienInvitation]'


                        }
                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: bot.user.avatarURL,
                        text: "© ReSsAuX Selfbot"
                    }
                }
              })
            }


        if(message.content == 'salut' || message.content == 'Salut' || message.content == 'Bonsoir' || message.content == 'bonsoir' || message.content == "Bonjour" || message.content == "bonjour")
        {
            console.log(message.author.username + ' vous dis bonjour ' + message.guild.name + ' channel: ' + message.channel.name);
            message.channel.send('Yo ' + message.author + ' ! :grin: ');
        }


    }
}
})
})






bot.login(token);
