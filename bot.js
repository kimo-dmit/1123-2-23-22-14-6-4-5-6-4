const Discord = require("discord.js");
const client = new Discord.Client();
const ms = require("ms");
const fs = require('fs');
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');
const r1 = require('snekfetch');
const snekfetch = require('snekfetch');
const Canvas = require("canvas");
const child_process = require("child_process");
const ytdl = require('ytdl-core');
 const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const jimp = require('jimp')
const prefix = ".";



//const args = message.content.slice(prefix.length).trim().split(/ +/g);
//const command = args.shift().toLowerCase();

//=========================================================================

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(!message.channel.guild) return;
if (command === 'ping') {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
                  .setColor('#36393e')
.setTitle(' Time Taken : '+msg + " ms")
.setAuthor(' Discord Api : '+api + " ms")
message.channel.send({embed:embed});
}
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  console.log(`Servers : ${client.guilds.size} `);
  console.log(`Users : ${client.users.size} `);
  console.log(`Channels : ${client.channels.size}`);
  
   client.user.setActivity('SunRise',{type: 'WATCHING'})
});

const developers = ['290908670529896448', '323231064157847559'];
const admin = "o";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
 
  if (message.content.startsWith(admin + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Watching ${argresult} \` `)
  } else 
  if (message.content.startsWith(admin + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Listening ${argresult} \` `)
  } else 
  if (message.content.startsWith(admin + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
     message.channel.send(` ☑ Client Activity Now Is : \`Streaming ${argresult} \` `)
  }
});


   client.on('message', message => {
        let guild = '449791787440275467';
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return;
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return;
    }
}
});

client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle(' New Dm Mesage ')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\`${message.content}\``)
            .setFooter(`From : ${message.author.tag}`)
        client.channels.get("468523166197612545").send({ embed: iiMo });
    }
});


client.on('message', message => {
        if (message.content === prefix + "inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setTitle(`:small_orange_diamond: Click Here To Invite Onixes. `)
        .setURL(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
     message.channel.sendEmbed(embed);
       }
   });

const adminprefix = ".";
const devs = ['290908670529896448', '323231064157847559'];

client.on('message', message => {
if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(` Restarting : ${message.author.username}`);
        console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
        client.destroy();
        child_process.fork(__dirname + "/o.js");
        console.log(`تم اعادة تشغيل البوت`);
    }
  
  });

//=========================================================================

 client.on('message', message => {
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command==="help") {
        if(!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
  .setColor('#36393e')
  .setTitle("Check Your DM.")
  message.channel.send('<@' + message.author.id + '>').then(message => message.delete(5000));
  message.channel.sendEmbed(embed).then(message => message.delete(5000));
  }
  });
  














//========================================================================
client.login(process.env.BOT_TOKEN);
