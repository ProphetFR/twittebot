const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("TwitterBot, !help");
    console.log("Le Bot et la pour vous informer");
})

bot.login("NDQ4OTM4NDExMTc3Mjc5NDg4.Dedeyw.UNUMi6mCQM8CwcL2vwh1SCvLapE");

bot.on('message', message => {
  if (message.content === '!twiiter') {
    message.send('ok dac')
   
  }
});


else if(message.constent === '!twitte'( {
    message.channel.send('embed: {
       color: 3447003,
       description: 'voila frére tes twitte '
    }});
        
   }
 )
