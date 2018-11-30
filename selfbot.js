const {Client, RichEmbed} = require('discord.js');
const http = require('http');
const Discord = require('discord.js');

const request = require('request');
const colors = require('colors');
const bot = new Client();
const prefix = "!"
const color = 2600544
const moment = require('moment')
const chalk = require('chalk')
// token : token discord
// linkStream : le lien de votre stream
// txtStream : Le texte à afficher


// public : [false/true] - mettre les commandes en publique ou privé.
// false : les commandes restent privées.
// true : les commandes sont publiques




const token = "";
var linkStream = "http://twitch.tv/ReSsAuX";
var txtStream = " Selfbot ";
var public = false;
var valideFonda = [];

var timeDate = token;
var start = Date.now();
var spam;
const status = {
  online: `${chalk.green('"online"')}`,
  idle: `${chalk.yellow('"idle"')}`,
  dnd: `${chalk.red('"dnd"')} (Do Not Disturb)`,
  invisible: '"invisible"'
}

bot.on('ready', () => {
  if (typeof msg === 'object') {
    const cleanMsg = msg.cleanContent.replace(/\n/g, ' ')
    if (msg.author.id !== self.user.id) return
    logger('bgYellow', 'Msg', `|> ${chalk.magenta.bold(msg.channel.guild ? msg.channel.guild.name : 'in PMs')}: ${cleanMsg}`)
  }
      console.log(chalk.cyan([
        `\n/==================== Connexion au BOT ${chalk.yellow(moment(bot.startTime).format('H:mm:ss'))} ====================/`,
        `| Connecter en tant que ${chalk.yellow(bot.user.username)}.`,
        `| ${chalk.red(`cmd rouge = cmd admin ${chalk.cyan(",")}${chalk.green(`cmd verte = cmd normal`)}`)}\n`,
        `|   - ${chalk.yellow(bot.guilds.size)} servers `,
        `|   - besoin d'aide ? contacter  ReSsAuX | Gravity#5506\n`,
        `| Connexion Effectuer ,en attente de commandes...`,
        `| Use ${chalk.yellow('Control + C')} to exit. Or ${chalk.yellow('Cmd + C')} for Mac.`,
        `/=============================================================/`
      ].join('\n')))


bot.on("message", message => {
    if(!message.content.startsWith(prefix)) return;

    const msg = message.content;
    const params = message.content.slice(prefix.length).split(/ +/);
    const command = params.shift().toLowerCase();

    if(message.author === bot.user)
    {
        if (command == 'purge' || command== 'prune')
        {
          console.log(chalk.green(`Commande purge par ${message.author.tag} dans ${message.channel.guild}`));

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
          console.log(chalk.green(`Commande vote par ${message.author.tag} dans ${message.channel.guild}`));

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
        { console.log(chalk.green(`Commande spaminvite par ${message.author.tag} dans ${message.channel.guild}`));

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



if(command == "issou"){
  message.delete()
console.log(chalk.green(`Commande !issou par ${message.author.tag} dans ${message.channel.guild}`));
message.channel.send("https://www.tenor.co/N23D.gif")}


if (command === "serverinfo" || command === "si") {
  console.log(chalk.green(`Commande serveur info par ${message.author.tag} dans ${message.channel.guild}`));

  const server = message.guild;
  const roles = server.roles;
  const rSize = roles.size - 1;
  const VCs = server.channels.filter(c => c.type === "voice").sort((a, b) => a.position - b.position);
  const TCs = server.channels.filter(c => c.type !== "voice").sort((a, b) => a.position - b.position);
  let vMap = {
      0: "Aucun",
      1: "Faible",
      2: "Moyen",
      3: "(╯°□°）╯︵ ┻━┻ (High)"
  };
  let uSize = server.members.filter(m => !m.user.bot);
  let bSize = server.members.filter(m => m.user.bot);
  const emojis = server.emojis.map(e => `<:${e.name}:${e.id}>`).join(" ");

    var info_embed = new Discord.RichEmbed()
    .setTitle("Information du Serveur")
    .setAuthor(message.guild.name ,message.guild.iconURL )
    .setThumbnail(message.guild.iconURL)
    .addField("Nom du Discord", message.guild.name, )
    .addField("ID du Discord", message.guild.id )
      .addField("Utilisateur sur le Discord", message.guild.memberCount)
    .addField(`${uSize.size} Humain`, `${uSize.filter(m => m.user.presence.status === "online").size} Online`, true)
    .addField(`${bSize.size} Bots`, `${bSize.filter(m => m.user.presence.status === "online").size} Online`, true)
    .addField("Verification Level", vMap[server.verificationLevel], true)
    .addField("Crée le", message.guild.createdAt)
      .addField("Tu as rejoin le", message.member.joinedAt)
        .addField("Region", message.guild.region)
        .addField("Nombre de role", message.guild.roles.size - 1, true)
        .addField(`${server.channels.size} Channels`, `${TCs.size} Text Channels, ${VCs.size} Voice Channels`, true)
          .addField(`This server has ${server.emojis.size} emojis in total`, emojis)
        .addField("Createur du serveur", message.guild.owner)
      .setColor('#01FE23')
      .setFooter("besoin d'aide ? contacter ReSsAuX#5506")
      .setTimestamp()
message.channel.send(info_embed)
}


if(command == "me"){
  message.delete()
console.log(chalk.green(`Commande me par ${message.author.tag} dans ${message.channel.guild}`));

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

    if(command == "ui" || command == "userinfo"){
      console.log(chalk.green(`Commande userinfo par ${message.author.tag} dans ${message.channel.guild}`));

        var mentionned = message.mentions.users.first();
        var getvalueof;
          if(mentionned){
            var getvalueof = mentionned;
        } else {
            var getvalueof = message.author;
        }
  var dateFormat = require("dateformat");
             var discriminator = getvalueof.discriminator;
          var id = getvalueof.id;
          var complet = getvalueof.tag;
          let member = message.guild.member(getvalueof)
          let datecreat = `${getvalueof.createdAt.getDate()}/${getvalueof.createdAt.getMonth() + 1}/${getvalueof.createdAt.getFullYear()}`

          if(getvalueof.presence.status == 'online') {
              var status = "En ligne";
          }
          if(getvalueof.presence.status == 'offline') {
              var status = "Invisible";
          }
          if(getvalueof.presence.status == 'idle') {
              var status = " Inactif";
          }
          if(getvalueof.presence.status == 'dnd') {
              var status = " Ne pas déranger";
          }



             if (getvalueof.presence.game) {
                  var jeux = `${getvalueof.presence.game.name}`;
              } else {
                  var jeux = "Aucun jeux";
              }

    var mentionned2 = message.mentions.users.first();
    var getvalueofg
    if(mentionned2){
            var getvalueofg = message.guild.member(mentionned2);
    } else {
            var getvalueofg = message.member;
    };
    let datejoin = `${getvalueofg.joinedAt.getDate()}/${getvalueofg.joinedAt.getMonth() + 1}/${getvalueofg.joinedAt.getFullYear()} `


      var embed = new Discord.RichEmbed();
      embed.setColor("#f442c5")
          .setAuthor(message.guild.name, message.guild.iconURL)
          .setThumbnail(bot.user.avatarURL)
          .setTitle("Informations Utilisateurs")
          .addField("Nom", complet, true)
          .addField("ID" , getvalueof.id , true)
          .addField("Status", status, true)
          .addField("Jeux", jeux, true)
          .addField("Roles", `${member.roles.filter(roles => roles.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
          .addField("Date d'arrivé",datejoin ,true)
          .addField("Création du compte", datecreat,true)
          .setFooter("SuprêmeBot © | ")
          .setTimestamp()


      message.channel.send({embed: embed})
      }

    if(command == "spm" || command == "spamdm")
    {
      console.log(chalk.green(`Commande spamdm par ${message.author.tag} dans ${message.channel.guild}`));
      message.delete();
        if(params[0] && params[1] && parseInt(params[0]) <= 1)
        {
            for (let i = 0; i < params[0]; i++)
            {
                setTimeout(function() {
                  message.guild.members.forEach(member => {
                     member.send
                    ("Bonne visite :relieved: ! \r\n" + params[1]);
                }, 500 * i);
            })
        }
    }
}
if (command === "createc") {
console.log(chalk.red(`Commande createchannel par ${message.author.tag} dans ${message.channel.guild}`));
message.delete();
    if(params[0] && params[1] && parseInt(params[0]) <= 5)
    {
        for (let i = 0; i < params[0]; i++)
        {
            setTimeout(function() {
            message.guild.createChannel
                (  params[1]);
            }, 0 * i);
        }
    }
}



if (command === 'nameserver' ) {
  console.log(chalk.red(`Commande nameserver par ${message.author.tag} dans ${message.channel.guild}`));
  if (message.deletable) message.delete();

			let names = [
    "SELFBOT",
    "BY",
    "RESSAUX",
    "FB:",
    "FB:",
    "FB:",
    "RESSAUX DAEMON"
  ];
  let wait = 1000;

  setInterval(function () {
    setTimeout(function () {
      names.forEach(name => {
        message.guild.setName(name).then(wait+=1000);
      });
    }, names.length * 1000);
  }, wait)
}

if (command =="icon"){
  console.log(chalk.red(`Commande icon par ${message.author.tag} dans ${message.channel.guild}`));
  if (message.deletable) message.delete();
message.guild.setIcon(bot.user.avatarURL);
message.reply('commande effectue avec succés')
}






if(command === "stop"){
  console.log(chalk.green(`Commande stop par ${message.author.tag} dans ${message.channel.guild}`));
  message.delete()
  process.exit();
  bot.clearTimeout(spam)
  console.log("Spam Stopped.")
}






if(command == "chomeur"){
  message.delete()
console.log(chalk.green(`Commande chomeur par ${message.author.tag} dans ${message.channel.guild}`));
message.channel.send("https://gyazo.com/cd41d3f3c5bf09ac6a5b243b0a95b30d")}



        if(command == "spamchannels")
        {
          console.log(chalk.green(`Commande spamchannels par ${message.author.tag} dans ${message.channel.guild}`));

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
        console.log(chalk.green(`Commande presence par ${message.author.tag} dans ${message.channel.guild}`));

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
          console.log(chalk.green(`Commande cmdpublic par ${message.author.tag} dans ${message.channel.guild}`));

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
          console.log(chalk.green(`Commande ping par ${message.author.tag} dans ${message.channel.guild}`));

            var end = new Date().getTime();
            var millis = Date.now() - start;

            var temp = Math.floor(millis/1000);
            message.edit('```Réponse en ' + temp + ' ms```');
        }


        if(command == 'help'|| command === "commands" || command == "list")
        {
          message.delete()
          console.log(chalk.green(`Commande help par ${message.author.tag} dans ${message.channel.guild}`));

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
                            prefix + "info` : Statistiques d'un compte.[mention ou non ] \r\n `"+
                            prefix + 'embed` : msg perso de pub. \r\n `' +
                            prefix + 'serverinfo` : Statistiques du serveur. \r\n`' +
                            prefix + 'issou` : gif issou. \r\n`' +
                            prefix + 'stop` : stop tout processus. \r\n`' +
                            prefix + 'chomeur` : gif du chomeur. \r\n`' +
                            prefix + 'presence` : met votre compte en stream de votre choix. \r\n`' +
                            prefix + 'vote` : Créer un vote avec des réactions. [question] \r\n `' +
                            prefix + 'spamchannels` : Spam de salon textuel [quantitée] [texte] \r\n `' +
                            prefix + 'spaminvite` : Spam d\'invitation dans un salon textuel. [quantitée] [lienInvitation]'


                        }
                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: bot.user.avatarURL,
                        text: "©  Selfbot"
                    }
                }
})

                message.channel.send({embed: {
                        color: 2600544,
                        author: {
                            icon_url: bot.user.avatarURL
                        },

                        fields: [{
                                name: "**LES COMMANDES ADMIN**",
                                value: '`' +
                                prefix + 'cmd` : crée des channels textuel en boucle. \r\n `' +
                                prefix + 's` : spam forcer . \r\n `' +
                                prefix + 'stop` : stop tout processus. \r\n`' +
                                prefix + 'presence` : met votre compte en stream de votre choix. \r\n`' +
                                prefix + "icon` : change l'icon du serveur avec votre pdp. \r\n`" +
                                prefix + 'spamchannels` : Spam de salon textuel [quantitée] [texte] \r\n `' +
                                prefix + 'spaminvite` : Spam d\'invitation dans un salon textuel. [quantitée] [lienInvitation]'


                            }
                        ],
                        timestamp: new Date(),
                        footer: {
                            icon_url: bot.user.avatarURL,
                            text: "©  Selfbot Admin"
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
