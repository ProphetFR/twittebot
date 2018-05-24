const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("TwitterBot, !!help");
    console.log("Le Bot et la pour vous informer");
})

bot.login("NDQ4OTM4NDExMTc3Mjc5NDg4.Dedeyw.UNUMi6mCQM8CwcL2vwh1SCvLapE");

bot.on('message', message => {
  if (message.content === '!!twiiter') {
    message.send('ok dac')
   
  }
});


else if(message.constent === '!!twitte'( {
    message.channel.send('embed: {
       color: 3447003,
       description: 'voila frére tes twitte '
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
