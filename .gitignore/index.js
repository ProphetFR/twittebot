const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("TwitterBot, !!help");
    console.log("Le Bot et la pour vous informer");
})

bot.login("NDQ4OTM4NDExMTc3Mjc5NDg4.Dedeyw.UNUMi6mCQM8CwcL2vwh1SCvLapE");


bot.on('message', message => {
    if (message.content === '!!twitter') {
      message.reply('tu veux des info sur tes jeux pas de problaime les voila sur!')
      message.reply('DOFUS     https://twitter.com/DOFUSfr?lang=fr!')
      message.reply('CS:GO     https://twitter.com/csgo_dev?lang=fr!')
      message.reply('Overwatch https://twitter.com/OverwatchFR?lang=fr!')
      message.reply('fortnite  https://twitter.com/FortniteGame?lang=fr!')
    }
  })

  bot.on('message', message => {
    if (message.content === '!!twiiter') {
      message.send('ok dac voila la commande !!twitter')
     
    }
  })
  
  
  else if(message.constent === '!!twitte'( {
      message.channel.send('embed: {
         color: 3447003,
         description: 'non pas sa'
      }});
          
     }
   )
  
      
      bot.on('message', message => {
  
    if (message.content.startsWith('!!play')) {
      // On récupère le premier channel audio du serveur
      let voiceChannel = message.guild.channels
        .filter(function (channel) { return channel.type === 'voice' })
        .first()
      // On récupère les arguments de la commande 
      // il faudrait utiliser une expression régulière pour valider le lien youtube
      let args = message.content.split(' ')
      // On rejoint le channel audio
      voiceChannel
        .join()
        .then(function (connection) {
          // On démarre un stream à partir de la vidéo youtube
          let stream = YoutubeStream(args[1])
          stream.on('error', function () {
            message.reply("Je n'ai pas réussi à lire cette vidéo :(")
            connection.disconnect()
          })
          // On envoie le stream au channel audio
          // Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
          connection
            .playStream(stream)
            .on('end', function () {
              connection.disconnect()
            })
        })
    }
  
  })

  bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenue sur mon serveur ' + member.displayName)
    }).catch(console.error)
    // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
  })
  
