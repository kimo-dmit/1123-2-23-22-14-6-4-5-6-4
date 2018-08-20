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
if(message.content.toLowerCase() === prefix + "ping") {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
                  .setColor('#36393e')
.setTitle(' Time Taken : '+msg + " ms")
.setAuthor(' Discord Api : '+api + " ms")
message.channel.send({embed:embed}).then(message => message.delete(5000));
}
});

client.on('message', message => {
if(message.content.toLowerCase() === prefix + "bot") {

message.channel.send(`

__Servers : ${client.guilds.size}__
__Users : ${client.users.size}__
__Channels : ${client.channels.size}__

`);
    }
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  console.log(`Servers : ${client.guilds.size} `);
  console.log(`Users : ${client.users.size} `);
  console.log(`Channels : ${client.channels.size}`);
  
   client.user.setActivity('Soon',{type: 'WATCHING'})
});

client.on('message', message => {
  var prefix = "."
 if(message.content.toLowerCase() === prefix + "uptime") {
    let ms = client.uptime;
    let cd = 24 * 60 * 60 * 1000; 
    let ch = 60 * 60 * 1000; 
    let cm = 60 * 1000; 
    let cs = 1000; 
    let days = Math.floor(ms / cd);
    let dms = days * cd; 
    let hours = Math.floor((ms - dms) / ch);
    let hms = hours * ch; 
    let minutes = Math.floor((ms - dms - hms) / cm);
    let mms = minutes * cm; 
    let seconds = Math.round((ms - dms - hms - mms) / cs);
    if (seconds === 60) {
        minutes++; 
        seconds = 0;
    }
    if (minutes === 60) {
        hours++; 
        minutes = 0;
    }
    if (hours === 24) {
        days++; 
        hours = 0;
    }
    let dateStrings = [];

    if (days === 1) {
        dateStrings.push('**1** day');
    } else if (days > 1) {
        dateStrings.push('**' + String(days) + '** days');
    }

    if (hours === 1) {
        dateStrings.push('**1** hour');
    } else if (hours > 1) {
        dateStrings.push('**' + String(hours) + '** hours');
    }

    if (minutes === 1) {
        dateStrings.push('**1** minute');
    } else if (minutes > 1) {
        dateStrings.push('**' + String(minutes) + '** minutes');
    }

    if (seconds === 1) {
        dateStrings.push('**1** second');
    } else if (seconds > 1) {
        dateStrings.push('**' + String(seconds) + '** seconds');
    }

    let dateString = '';
    for (let i = 0; i < dateStrings.length - 1; i++) {
        dateString += dateStrings[i];
        dateString += ', ';
    }
    if (dateStrings.length >= 2) {
        dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
        dateString += 'and ';
    }
    dateString += dateStrings[dateStrings.length - 1];
    message.channel.send(dateString);
}
});




const developers = ['290908670529896448', '323231064157847559'];
const admin = "o";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
 
  if (message.content.startsWith(admin + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Watching ${argresult} \` `).then(message => message.delete(5000));
  } else 
  if (message.content.startsWith(admin + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Listening ${argresult} \` `).then(message => message.delete(5000));
  } else 
  if (message.content.startsWith(admin + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
     message.channel.send(` ☑ Client Activity Now Is : \`Streaming ${argresult} \` `).then(message => message.delete(5000));
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
        client.channels.get("479168607746785282").send({ embed: iiMo });
    }
});


client.on('message', message => {
        if (message.content === prefix + "invite") {
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
        child_process.fork(__dirname + "/bot.js");
        console.log(`تم اعادة تشغيل البوت`);
    }
  
  });

client.on('guildMemberAdd', member => {
	var Canvas = require('canvas') //npm i canvas
var jimp = require('jimp') //npm i jimp
     const welcomer =  member.guild.channels.find('name', 'welcome');
     if(!welcomer) return;
const w = ['./w1.png'];
 
         let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
             
           const millis = new Date().getTime() - member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;

 
                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                       
                       
                       
                       
                       
                                               ctx.font = '15px Arial';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`${createdAt.toFixed(0)}`, 135, 160); //shows username!
                       
                        ctx.font = "bold 14px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 240, 150);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126);  
                         
               
welcomer.send('**Welcome** ' + `${member}` + ' **To** ' + `**__${member.guild.name}__**` + ' **Server** :two_hearts:')                              
welcomer.sendFile(canvas.toBuffer())
 
 
 
     
     
                    
     
                   
})
})
});                    
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
     const e = new Discord.RichEmbed()
     .setColor('#36393e')
         .setTitle('Click To Join Support Server')
         .setURL('https://discord.gg/8KAHHMj')
         .setDescription(`
     
     Main Commands : 
     
      
topinvites   |  توب انفايت
invinfo  [invitecode] |  معلومات عن الدعوه
guild     |  معلومات عن السيرفر
userinfo  |  معلومات عن العضو
avatar    |  صوره حسابك
image     |  صوره السيرفر
myinv     |  روابط الانفايت حقتك وكم شخص دخلت
stats     |  معلومات عن البوت
     Admin Commands : 
     
createcolors  [number] |  انشاء الوان
clear   [number]   |  تنظيف الشات
ban        |  حظر العضو
tempban    |  حظر العضو  لوقت معين
kick       |  طرد العضو
mute       |  اعطاء العضو ميوت كتابي
unmute     |  فك الميوت الكتابي
role all [rolename]        |  اعطاء الجميع رتبه
role humans [rolename]     |  اعطاء الاعضاء رتبه وليس البوتات
role bots [rolename]       |  اعطاء البوتات رتبه
role [Mention] [rolename]  |  اعطاء عضو رتبه
mc         |  قفل الشات
bc         |  رساله جماعيه بدون امبد
moveall    |  سحب الجميع الي رومك الصوتي
ebc        |  رساله جماعيه بامبد
bans       |  عدد المحظورين بالسيرفر
umc        |  فتح الشات
     
     
`)
message.author.sendEmbed(e)
  message.author.sendEmbed(e).catch(error => message.reply('Your DM is CLosed')).then(message => message.delete(10000));
  message.channel.send('<@' + message.author.id + '>').then(message => message.delete(5000));
  message.channel.sendEmbed(embed).then(message => message.delete(5000));
  }
  });
  
//========================================================================

client.on("guildCreate", guild => {
var gimg;
var gname;
var gmemb;
var groles;

gname = guild.name;
gimg = guild.iconURL;
gmemb = guild.members.size;
groles = guild.roles.map(r=> {return r.name});
  let channel = client.channels.get('475883237001134110')
const e = new Discord.RichEmbed()
.setColor('#36393e')
.addField('Bot Joined Guild : ', `${guild.name}`)
.addField('Guild id : ', `${guild.id}`)
.addField('Guild UserCount : ',gmemb = guild.members.size)
.addField('Guild Owner : ', guild.owner)
.setThumbnail(gimg)
.setTimestamp()
 channel.send(e);

});


client.on("guildDelete", guild => {
var gimg;
var gname;
var gmemb;
var groles;

gname = guild.name;
gimg = guild.iconURL;
gmemb = guild.members.size;
groles = guild.roles.map(r=> {return r.name});
  let channel = client.channels.get('475883237001134110')
const e = new Discord.RichEmbed()
.setColor('#36393e')
.addField('Bot Left Guild : ', `${guild.name}`)
.addField('Guild id : ', `${guild.id}`)
.addField('Guild UserCount : ',gmemb = guild.members.size)
.addField('Guild Owner : ', guild.owner)
.setThumbnail(gimg)
.setTimestamp()
 channel.send(e);

});
 

client.on('voiceStateUpdate', (oldM, newM) => {
  let m1 = oldM.serverMute;
  let m2 = newM.serverMute;
  let d1 = oldM.serverDeaf;
  let d2 = newM.serverDeaf;

  let ch = oldM.guild.channels.find('name', 'log')
  if(!ch) return;

    oldM.guild.fetchAuditLogs()
    .then(logs => {

      let user = logs.entries.first().executor.username

    if(m1 === false && m2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user} اخــذ مــيــوت صــوتــي بــواســطــه  ${newM} `)
       .setColor('#36393e')
        .setTimestamp()
       ch.send(embed)
    }
    if(m1 === true && m2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user} فــك عــنــه  مــيــوت صــوتــي بــواســطــه  ${newM} `)
       .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }
    if(d1 === false && d2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user}  اخــذ ديــفــن صــوتــي بــواســطــه   ${newM}`)
       .setColor('#36393e')
       .setTimestamp()

       ch.send(embed)
    }
    if(d1 === true && d2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user}  فــك عــنــه ديــفــن صــوتــي بــواســطــه   ${newM}`)
       .setColor('#36393e')
       .setTimestamp()

       ch.send(embed)
    }
  })
})


  client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
 
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
.setTitle(' تــعــديــل رســالــه  :  ')
.addField('قــبــل الــتــعــديــل',`${message.cleanContent}`)
.addField(' بــعــد  الــتــعــديــل ',`${newMessage.cleanContent}`)
.addField(' عــدلــت فــي  ',`<#${message.channel.id}>`)
.addField(' يــواســطــه  ', `<@${message.author.id}> `)
.setColor('#36393e')
       .setTimestamp();
     channel.send({embed:embed});
 
 
});
 
client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
   
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.user.createdTimestamp).fromNow();
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
   
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
       .setColor('#36393e')
       .setDescription(` <@${member.user.id}>  انــضــم لــلــســيــرفــر `)
       .setTimestamp();
     channel.send({embed:embed});
});
 
client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
   
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
   
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
       .setColor('#36393e')
       .setDescription(` <@${member.user.id}>  خــرج مــن الــســيــرفــر `)
       .setTimestamp();
     channel.send({embed:embed});
});
 
client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
   
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
 .setTitle('  مــســح رســالــه  :   ')
 .addField('  الــرســالــه  ',`${message.cleanContent}`)
 .addField('  مــســحــت فــي  ',`<#${message.channel.id}>`)
 .addField(' يــواســطــه  ', `<@${message.author.id}> `)
       .setColor('#36393e')
       .setTimestamp();
     channel.send({embed:embed});
 
});

     
      client.on("roleDelete", role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor('#36393e')          
            .setTitle('-  مــســح رتــبــه ')
            .addField(' اســم الــرتــبــه  ', role.name, true)
            .addField(' هــويــة الــرتــبــه ', role.id, true)
            .addField(' لــون الــرتــبــه ', role.hexColor, true)
            .addField(' بــواســطــه ', exec, true)
            .setColor('#36393e') 
            .setTimestamp()
            
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})


client.on('roleCreate', role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setTitle('+  انــشــاء رتــبــه ')
            .addField(' اســم الــرتــبــه  ', role.name, true)
            .addField(' هــويــة الــرتــبــه ', role.id, true)
            .addField(' لــون الــرتــبــه ', role.hexColor, true)
            .addField(' بــواســطــه ', exec, true)
            .setColor('#36393e') 
            .setTimestamp()
            
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})




  client.on("guildBanAdd", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor("حــظــر عــضــو :  ")
        .setColor('#36393e') 
        .setThumbnail(myUser.avatarURL)
        .addField(' الــعــضــو  ',`**${myUser.username}**`,true)
        .addField('  بــواســطــه ',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});



    client.on("guildBanRemove", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor("  فــك حــظــر عــن عــضــو ")
        .setColor('#36393e') 
		 .setThumbnail(myUser.avatarURL)
        .addField(' الــعــضــو  ',`**${myUser.username}**`,true)
        .addField('  بــواســطــه ',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});


//========================================================================

 client.on('message', message => {
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(message.content.toLowerCase() === prefix + "moveall") {
     message.delete(5000)
        if(!message.channel.guild) return;
 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send(' Error : \` You Dont Have Move_Members Permission \`').then(message => message.delete(5000));
   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply(' Error : \` I Dont Have Move_Members Permission \`').then(message => message.delete(5000));
if (message.member.voiceChannel == null) return message.channel.send(' Error : \` Join VoiceChannel First \`').then(message => message.delete(5000));
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.reply('\nEveryone Moved To : '+message.member.voiceChannel.name).then(message => message.delete(7000));


 }
   });
   
client.on('message', message => {
  
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'ebc') {
         message.delete(5000)
        if(!message.channel.guild) return;
        if (!args[1]) {
    message.channel.send(`${prefix}` + "**ebc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» Server :', `${message.guild.name}`)
                .addField('» Sent By : : ', `${message.author.username}#${message.author.discriminator}`)
                .addField('» Message :  : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });

 client.on('message', message => {
  
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
         message.delete(5000)
        if(!message.channel.guild) return;
        if (!args[1]) {
    message.channel.send(`${prefix}` + "**bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» Server :', `${message.guild.name}`)
                .addField('» Sent By : : ', `${message.author.username}#${message.author.discriminator}`)
                .addField('» Message :  : ', args)
                .setColor('#ff0000')
                m.send(`${m}`);
                m.send('\n\ Server : '+`${message.guild.name} \n\ `+ 'Sent By : ' + `${message.author.username}#${message.author.discriminator}\n\ ` + 'Message : ' + args);
            });
        }
        } else {
            return;
        }
    });

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(message.content.toLowerCase() === prefix + "bans") {
        message.delete(5000)
         if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("Error : \` I Dont Have ADMINISTRATOR Permission\`").then(message => message.delete(5000));
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        if(!message.channel.guild) return;
        message.guild.fetchBans()
        .then(bans => message.channel.send(`\`${bans.size}\` : عدد الاشخاص المحظورين من السيرفر `)).then(message => message.delete(5000))

  .catch(console.error);
}
});


client.on('message', async message => {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(message.content.toLowerCase() === prefix + "tempban") {
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply('You Need  \` BAN_MEMBERS\` Permission  ').then(message => message.delete(4000))
 
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("I Don't Have ` BAN_MEMBERS ` Permission").then(message => message.delete(4000))


      let mention = message.mentions.members.first();
      if(!mention) return message.reply('Error : `Mention a User`').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('Error : ` You Cann’t Ban User Have Higher Rank Than You ` ').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('Error : ` I Cann’t Ban User Have Higher Rank Than Me ` ').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.id === message.author.id) return message.reply('Error : \` You Cannot Ban Your Self \`').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });

       let duration = args[2];
       if(!duration) return message.reply('Error :\` Type The Ban Duration \` ').then(msg => {
         msg.delete(3500);
         message.delete(3500);
       });
       if(isNaN(duration)) return message.reply('Error : `Invaild Duration`').then(msg => {
         msg.delete(3500);
         message.delete(3500);
       });

       let reason = message.content.split(" ").slice(3).join(" ");
       if(!reason) reason = 'غير محدد';

       let thisEmbed = new Discord.RichEmbed()
       .setAuthor(mention.user.username , mention.user.avatarURL)
       .setTitle('Banned')
       .setThumbnail(mention.avatarURL)
       .addField('# - Server :',message.guild.name,true)
       .addField('# - By :',message.author,true)
       .addField('# - Reason :',reason)
                 .setColor('#36393e')
       .setFooter(message.author.tag,message.author.avatarURL);
       mention.send(thisEmbed).then(() => {
       mention.ban({
         reason: reason,
       });
       message.channel.send(`** ${mention.user.username} banned from the server ! :airplane: **  `)
       setTimeout(() => {
         if(duration === 0) return;
         message.guild.unban(mention);
       },duration * 60000);
     });
   }
});

    client.on('message', message => {
 if(!message.channel.guild) return; 	 	
 
  if (message.author.bot) return;
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

  

if(message.content.toLowerCase() === prefix + "ban") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply('You Need  \` BAN_MEMBERS\` Permission  ').then(message => message.delete(4000))
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("I Don't Have ` BAN_MEMBERS ` Permission").then(message => message.delete(4000))
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply('Mention a User').then(message => message.delete(4000))
  if (!message.guild.member(user)
  .bannable) return message.reply("I Can’t Ban This User").then(message => message.delete(4000))


  message.guild.member(user).ban(7, user);

message.channel.send(`** ${user.tag} banned from the server ! :airplane: **  `).then(message => message.delete(10000))

}
});


client.on('message', message => {
 if(!message.channel.guild) return;
  if (message.author.kick) return;
    if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(message.content.toLowerCase() === prefix + "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply('You Need  \` KICK_MEMBERS\` Permission  ').then(message => message.delete(4000))
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have `KICK_Members` Permission").then(message => message.delete(4000))
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("Mention a User").then(message => message.delete(4000))
  if(!reason) return message.reply ("Supply a Reason").then(message => message.delete(4000))
  if (!message.guild.member(user)
  .bannable) return message.reply("I Can’t Kick This User").then(message => message.delete(4000))

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor('Action : Kick')
  .setColor('#36393e')
  .setTimestamp()
  .addField("User :",  `${user.tag}`)
  .addField("By :", `${message.author.tag}`)
  .addField("Reason :", `${reason}`)
            .setColor('#36393e')
  message.channel.send(`${user.tag} Has Been Kicked`).then(message => message.delete(10000))
  message.guild.channels.find('name','log').send({embed : banembed})
}
});


 client.on("message", message => {
 if(!message.channel.guild) return;  
  if (message.author.bot) return;
 
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
 
if(message.content.toLowerCase() === prefix + "unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply(' Error : You Need `` MANAGE_ROLES ``Permission ').catch(console.error).then(message => message.delete(4000))
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply(" I Can’t Find 'Muted' Role ").catch(console.error).then(message => message.delete(4000))
  if (message.mentions.users.size < 1) return message.reply(' Error : ``Mention a User``').catch(console.error).then(message => message.delete(4000))

 
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply(' Error : I Don’t Have `` MANAGE_ROLES ``Permission').catch(console.error).then(message => message.delete(4000))
 
  if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
    });
  }
 
};
 
});

client.on('message',function(message) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
 if(!message.channel.guild) return;    let messageArray = message.content.split(' ');
    let muteRole =  message.guild.roles.find('name', 'Muted');
    let muteMember = message.mentions.members.first();
    let muteReason = messageArray[2];
    let muteDuration = messageArray[3];
if(message.content.toLowerCase() === prefix + "mute") {
            
  if (message.author.bot) return;
       if(!muteRole) return message.guild.createRole({name: 'Muted'}).then(message.guild.channels.forEach(chan => chan.overwritePermissions(muteRole, {SEND_MESSAGES:false,ADD_REACTIONS:false})));
       if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send(' Error : You Need `` MANAGE_ROLES ``Permission ');
       if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(' Error : I Don’t Have `` MANAGE_ROLES ``Permission ');
       if(!muteMember) return message.channel.send(' Error : ``Mention a User``').then(message => message.delete(4000))
       if(!muteReason) return message.channel.send(' Error : ``Supply a Reason``').then(message => message.delete(4000))
       if(!muteDuration) return message.channel.send(' Error : `` Supply Mute Time `` \n Ex: #mute @user reason 1m ').then(message => message.delete(4000))
       if(!muteDuration.match(/[1-7][s,m,h,d,w]/g)) return message.channel.send(' Error : `` Invalid Mute Duration``').then(message => message.delete(4000))
       message.channel.send(`${muteMember} Has Been Muted.`).then(message => message.delete(5000))
       muteMember.addRole(muteRole);
       muteMember.setMute(true)
       .then(() => { setTimeout(() => {
           muteMember.removeRole(muteRole)
           muteMember.setMute(false)
       }, mmss(muteDuration));
       });
   } 
});

client.on('message', message => {
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if (message.author.bot) return;
if(message.content.toLowerCase() === prefix + "mc") {
                        if(!message.channel.guild) return;

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You Need MANAGE_MESSAGES Permission').then(message => message.delete(5000))
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
 const e = new Discord.RichEmbed()
               .setAuthor('Channel Disabled By : '+message.author.username)
                .setColor('#36393e')
               
               message.channel.send(e)
               });
             }
if(message.content.toLowerCase() === prefix + "umc") {
    
    if(!message.channel.guild) return;

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You Need MANAGE_MESSAGES Permission').then(message => message.delete(5000))
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               const e = new Discord.RichEmbed()
               .setAuthor('Channel Enabled By : '+message.author.username)
                        .setColor('#36393e')
               
               message.channel.send(e)
           });
             }



});


client.on('message', message => {
   const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(message.content.toLowerCase() === prefix + "role") {
        let member = message.mentions.users.first();
        let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
        console.log(role);
        if(member) {
              if(role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                console.log(roleRe);
                let role1 = message.guild.roles.find('name', roleRe);
                console.log(`hi`);
const ee =new Discord.RichEmbed()
.setColor('#36393e')
 .setDescription('I Cann’t Find This Role')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);                message.guild.member(member).removeRole(role1.id);
                
                     const e = new Discord.RichEmbed()
                     
                 .setDescription(' ** Changed Roles For **'+member+'**,** '+'**'+'-'+role1.name+'**')
                .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
                .setColor('#36393e')
                 message.channel.send(e)
            } else if(!role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                let role1 = message.guild.roles.find('name', roleRe);
const ee =new Discord.RichEmbed()
 .setDescription('I Cann’t Find This Role')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
 .setColor('#36393e')
        if(!role1) return message.channel.send(ee);                message.guild.member(member).addRole(role1);
                const e = new Discord.RichEmbed()
                
                .setDescription('** Changed Roles For **'+member+'**,** '+'**'+'+'+role1.name+'**')
                .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
                .setColor('#36393e')
                 message.channel.send(e)
            } else {
                message.reply(`يجب عليك كتابة اسم الرتبة`);
            } 
        }
 else if(args[0] == 'all') {
  if(role.startsWith('-')) { 
       let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
         let role1 = message.guild.roles.find('name', roleRe);
                   message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
           message.guild.members.forEach(m => {
            message.guild.member(m).removeRole(role1.id);
        });
         msg.edit(`**  Done...\n**` +role1.name+`** Has Taken From __${message.guild.members.size}__ Member**`);
    });
  }
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return;
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
        message.guild.members.forEach(m => {
            message.guild.member(m).addRole(role1);
        });
        msg.edit(`**  Done...\n**` +  role1.name+`** Has Given To __${message.guild.members.size}__ Members **`);
    });
}
} else if(args[0] == 'humans') {
     if(role.startsWith('-')) { 
       let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
         let role1 = message.guild.roles.find('name', roleRe);
                   message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
           message.guild.members.forEach(m => {
            message.guild.member(m).removeRole(role1.id);
        });
         msg.edit(`**  Done...\n**` +role1.name+`** Has Taken From __${message.guild.members.size}__ Member**`);
    });
  }

    if(role) {
        let role1 = message.guild.roles.find('name', role);

 const ee =new Discord.RichEmbed()
 .setDescription('I Cann’t Find This Role')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
        msg.edit(`**  Done...**`);
        });
    }
} else if(args[0] == 'bots') {
     if(role.startsWith('-')) { 
       let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
         let role1 = message.guild.roles.find('name', roleRe);
                   message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
           message.guild.members.forEach(m => {
            message.guild.member(m).removeRole(role1.id);
        });
         msg.edit(`**  Done...**`);
    });
  }
    if(role) {
        let role1 = message.guild.roles.find('name', role);
       const ee =new Discord.RichEmbed()
 .setDescription('I Cann’t Find This Role')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
        msg.edit(`** Done...\n**` +role1.name+`** Has Given To __${message.guild.members.size}__ Member**`);
});
}
}
}
});


client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
  if (message.author.bot) return;
  if(!message.channel.guild) return;
  if (!message.content.startsWith(prefix)) return;

 

if(message.content.toLowerCase() === prefix + "clear") {
  if (isNaN(args[0])) return message.channel.send('**Please supply a valid amount of messages to purge**').then(message => message.delete(5000))
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(message.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        message.delete().then
    message.channel.send("Error : `` Type a Value To Delete ``").then(m => m.delete(3000));
} else {
    message.delete().then
    message.delete().then
    message.channel.bulkDelete(textxt);
        message.reply("Cleared : ``" + textxt + "``").then(m => m.delete(3000))
        }    
    }
}
});


client.on('message', ra3d => {
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.toLowerCase() === prefix + "createcolors") {
    if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return;
              ra3d.channel.send(`** Done ... \n __${args}__ Color Role Created **`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
       
       

       
//========================================================================


client.on('message', message => {
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(message.content.toLowerCase() === prefix + "guild") {
         let i = 1;
       const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
            const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;
    var heg = message.guild;

        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .addField('GuidlOwner',message.guild.owner,true)
        .addField('Guild ID', message.guild.id,true)
        .addField('Guild MemberCount', `${message.guild.memberCount}`+` [Online : ${message.guild.members.filter(m=>m.presence.status == 'online').size + message.guild.members.filter(m=>m.presence.status == 'idle').size + message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]`)
        .addField('Guild BotCount',` ${message.guild.members.filter(m=>m.user.bot).size} `)
        .addField('Guild Channels',`\`🔊\` ${message.guild.channels.filter(m => m.type === 'voice').size} | `+`\`#\`${message.guild.channels.filter(m => m.type === 'text').size} `)
        .addField('Guild RolesCount',` ${message.guild.roles.size} `,true)
        .addField('Created',`\`منذ  ${createdAt.toFixed(0)}  يوم\`  ` ,true)
        .addField('Guild Region',message.guild.region,true)
                  .setColor('#36393e')
        
        message.channel.send(embed)
    }
})


 client.on('message',message =>{
       const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(message.content.toLowerCase() === prefix + "myinv") {
let guild = message.guild
var codes = [""]
 var nul = 0
      
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
    nul+=invite.uses
codes.push(`discord.gg/${invite.code}`)
}
 
})
  if (nul > 0) {
      const e = new Discord.RichEmbed()
      .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
      .setColor('#36393e')
      message.channel.send(e)
  }else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.channel.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes :\n${codes.join("\n")}`)
.setColor('#36393e')
message.channel.send({ embed: embed });
return;
}
})
}

});

client.on('message', message => {
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(message.content.toLowerCase() === prefix + "invinfo") {
         if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("I Don't Have Permission");
	    if(!args[1]) return message.reply('But An Invite Code')
        if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
var [embed,inv,uses]=[new Discord.RichEmbed(),null,''];
message.guild.fetchInvites().then(i =>{
    
    inv=i.get(args[1])
    if(inv.maxUses){
        uses=+inv.uses+"/"+inv.maxUses
    }else{
        uses=+inv.uses
    }



      message.channel.send(new Discord.RichEmbed().setTitle('Invite Info').setAuthor(message.author.tag,message.author.displayAvatarURL)
    .addField('Inviter : ',i.get(args[1]).inviter,true)
    .addField('CreatedAt',moment(i.get(args[1]).createdAt).format('YYYY/M/DD:h'),true)
    .addField('ExpiresAt',moment(i.get(args[1]).expiresAt).format('YYYY/M/DD:h'),true)
    .addField('Channel',i.get(args[1]).channel,true)
    .addField('Uses',uses,true)
    .addField('MaxAge',i.get(args[1]).maxAge,true).setColor(030101)
    
);
        })}
    });
    
          const arraySort = require('array-sort'),
          table = require('table');

client.on('message' , async (message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(message.content.toLowerCase() === prefix + "topinvites") {
                 if(message.author.bot) return;
        if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');

  var invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = ['User Invited |  Uses '];
    invites.forEach(i => {
        if (i.uses === 0) { 
            return;
            
        }
      possibleInvites.push(['\n\ ' +'<@'+ i.inviter.id +'>' + '  :  ' +   i.uses]);
       
     
    })
    
    const embed = new Discord.RichEmbed()
 .setColor('#36393e')
    .addField("Top Invites." ,`${(possibleInvites)}`)

    message.channel.send(embed)
    }
});

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(message.content.toLowerCase() === prefix + "stats") {
               if(message.author.bot) return;
        if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
    message.channel.send({
        embed: new Discord.RichEmbed()
            
            .addField('Ping' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('RAM Usage', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('ID' , `[ ${client.user.id} ]` , true)
            .addField('Prefix' , `[ ${prefix} ]` , true)
             .setColor('#36393e')
    })
}
});



client.on('message' , message => {
    var prefix = '.';
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
if(message.content.toLowerCase() === prefix + "id") {
     const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;
    if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
    let user = message.mentions.users.first() || message.author;
    const joineddiscord = (user.createdAt.getDate() + 1) + '-' + (user.createdAt.getMonth() + 1) + '-' + user.createdAt.getFullYear(); +"-" +`${createdAt.toFixed(0)}`
    message.delete();
       var mentionned = message.mentions.members.first();
     var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
    let game;
    if (user.presence.game === null) {
        game = 'None.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'None.';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = 'Online';
    } else if (user.presence.status === 'dnd') {
        status = 'DND';
    } else if (user.presence.status === 'idle') {
        status = 'Idle';
    } else if (user.presence.status === 'offline') {
        status = 'Offline';
    }
    if (user.presence.status === 'offline') {
        stat = 0x000000;
    } else if (user.presence.status === 'online') {
        stat = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {
        stat = 0x9C0000;
    } else if (user.presence.status === 'idle') {
        stat = 0xF7C035;
    }
    moment.locale('ar-ly');
    const embed = new Discord.RichEmbed()
  
  .addField('Discord Info : ', `Name : ${user.username}\n Discriminator: #${user.discriminator}\nID : ${user.id} \nJoinedDiscord : ${joineddiscord}\nBot :  ${user.bot}\nPlaying : ${game}\nStatus : ${status}`,true)
  .addField('Server Info :', `LastMessage : ${messag}\nJoined : ${moment(h.joinedAt).fromNow()}\nRoles : `+message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join(', '))
  .setAuthor(`${user.username}`, user.displayAvatarURL)
  .setColor('#36393e')
    .setThumbnail(user.displayAvatarURL)
    message.channel.send({embed})
  .catch(e => logger.error(e));
}
 });


client.on('message', message => {
if(message.content.toLowerCase() === prefix + "avatar") {
        if(message.author.bot) return;
        if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      
        const embed = new Discord.RichEmbed()
.setColor('#36393e')
        .setImage(`${x5bzm.avatarURL}`)
        .addField('Requested By:', message.author.tag)
      message.channel.sendEmbed(embed);
      }
    }
});
client.on('message', message => {
if(message.content.toLowerCase() === prefix + "avatar") {
        if(message.author.bot) return;
        if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
        var mentionned = message.mentions.users.first();

 if (mentionned) return;
          var x5bzm = message.author;
      
        const embed = new Discord.RichEmbed()
        .setColor('#36393e')
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

      client.on("message", message => {
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
 if(message.content.toLowerCase() === prefix + "avatar server") {
          if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
.setColor('#36393e')
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
client.login(process.env.BOT_TOKEN);
