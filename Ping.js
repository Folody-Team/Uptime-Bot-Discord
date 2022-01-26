const Discord = require('discord.js')
const client = new Discord.Client();
const ping = require('quickuptime')
let data = {
  httpclient: "got"
}
const Ping = new ping.Client(data)


client.on('ready', ready => {
  Ping.start(true)
  Ping.uniquestartall(true)
  console.log('ready')
})

client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith('$uptime'))return;
  const args = message.content.trim().split(/ +/g);
  if(!args[1])return message.channel.send("`Không hợp lệ!\nDùng - $uptime <liên kết>`");
  if(message.content.startsWith('$uptime'))
   Ping.addurl(args[1])
     Ping.uptime(args[1], 150000 , true) 
      message.channel.send('Bây giờ đối tượng này sẽ được kiểm tra cứ sau 2,5 phút')
});

require('./server');

client.login("Token")
