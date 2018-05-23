bot.on('message', message => {
  if (message.content === 'twiiter') {
    message.send('pong')
   
  }
})
