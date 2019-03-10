const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "</>";


bot.on('ready', () => {
console.log(`Discord bot loaded! Serves ${bot.guilds.size} guilds with ${bot.users.size} users.`)
// Discord activity
bot.user.setActivity(`CodeCavern | </>help`)
// Discord Status
bot.user.setStatus('online')
});

bot.on('message', message => {
  if (message.author.bot || !message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).split(' ')
  const command = args.shift().toLowerCase();


  if(command === 'ping') {
    const pingembed = new Discord.RichEmbed()
    .setColor(3447003)
    .addField('Ping:', `${Math.round(bot.ping)}` + 'ms')

    message.channel.send({embed: pingembed});
  }

if(command === 'help') {
  const helpembed = new Discord.RichEmbed()
  .setColor(3447003)
  .addField('Commands:', '</>ping - Grab bot ping \n</>startsupport [support room] [text] - Get coding support')

  message.channel.send({embed: helpembed});
}

if(command === 'startsupport') {
  var text = message.content.split (' ').slice(1).join(' ')
  const supportembed = new Discord.RichEmbed()
  .setColor(3447003)
  .addField('Coding Support', `Someone needs help in support room: \n${text}`)

  message.channel.send(`Got it, we will help you with: \n${text}`)
  bot.channels.get('554340395962597378').send('@${@&554252520449638403}');
  bot.channels.get('554340395962597378').send({embed: supportembed});
}


// Do not touch this
});




// THIS  MUST  BE  THIS  WAY

bot.login(process.env.BOT_TOKEN); //where BOT_TOKEN is the token of our bot
