const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const request = require('request');
const fs = require('fs');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const prefix = '2';
 
 
 client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
   client.user.setActivity("2play",{type: 'WATCHING'})
});

 
 
var servers = [];
var queue = [];
var guilds = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
var now_playing = [];
 
client.on('ready', () => {});
var download = function(uri, filename, callback) {
    request.head(uri, function(err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

client.on('message', function(message) {
    const member = message.member;
    const mess = message.content.toLowerCase();
    const args = message.content.split(' ').slice(1).join(' ');

    if (mess.startsWith(prefix + 'play')) {
        if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **__يجب ان تكون في روم صوتي__**');
        // if user is not insert the URL or song title
        if (args.length == 0) {
            let play_info = new Discord.RichEmbed()
.setColor('#36393e')
                .setDescription('**insert the URL or song title**')
            message.channel.sendEmbed(play_info)
            return;
        }
        if (queue.length > 0 || isPlaying) {
            getID(args, function(id) {
                add_to_queue(id);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    let play_info = new Discord.RichEmbed()
                        .setAuthor(message.author.username, message.author.avatarURL)
                        .addField('__**Added to the queue :**__', `** ${videoInfo.title} **`)
                        .setColor('#36393e')
                        
                        .setThumbnail(videoInfo.thumbnailUrl)
                    message.channel.sendEmbed(play_info).then(message =>message.delete(30*1000)).then(message => message.react('🎶'))
                    queueNames.push(videoInfo.title);
                    now_playing.push(videoInfo.title);

                });
            });
        }
        else {

            isPlaying = true;
            getID(args, function(id) {
                queue.push('placeholder');
                playMusic(id, message);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    let play_info = new Discord.RichEmbed()
                        .setAuthor(message.author.username, message.author.avatarURL)
                        .addField('__**Now Playing :**__', ` ** ${videoInfo.title}  **`)
                        .setColor('#36393e')
                        .setThumbnail(videoInfo.thumbnailUrl)

                    // .setDescription('?')
                    message.channel.sendEmbed(play_info).then(message => message.react('🎶'))
                    client.user.setGame(videoInfo.title,'https://www.twitch.tv/Abdulmohsen');
                });
            });
        }
    }
    
    else if (mess.startsWith(prefix + 'skip')) {
        if (!message.member.voiceChannel) return message.channel.send('\`You Must be  in a Voice Channel.\`').then(message => message.delete(5000) );
        
        message.channel.send(` \`Skipped  ✔\`  `).then(message => {
            skip_song(message);
            var server = server = servers[message.guild.id];
            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
            message.delete(5000)
        });
        
    }

    else if (message.content.startsWith(prefix + 'vol')) {
        if (!message.member.voiceChannel) return message.channel.send('\`You Must be  in a Voice Channel.\`').then(message => message.delete(5000) );
        // console.log(args)
        if (args > 100) return message.channel.send('\`Voice Levels : 1 - 100\`')
        if (args < 1) return message.channel.send('\`Voice Levels : 1 - 100\`')
        dispatcher.setVolume(1 * args / 50);
        message.channel.sendMessage(`**__Voice Level : ${dispatcher.volume*50}% __**`);
    }
    else if (mess.startsWith(prefix + 'pause')) {
        if (!message.member.voiceChannel) return message.channel.send('\`You Must be  in a Voice Channel.\`').then(message => message.delete(5000) );
        message.channel.send('\`Paused ✔\`').then(() => {
            dispatcher.pause();
        });
    }
    else if (mess.startsWith(prefix + 'resume')) {
        if (!message.member.voiceChannel) return message.channel.send('\`You Must be  in a Voice Channel.\`').then(message => message.delete(5000) );
            message.channel.send('`Resumed ✔`').then(() => {
            dispatcher.resume();
        });
    }
    else if (mess.startsWith(prefix + 'stop')) {
        if (!message.member.voiceChannel) return message.channel.send('\`You Must be  in a Voice Channel.\`').then(message => message.delete(5000) );
        message.channel.send('`Stopped ✔`');
        var server = server = servers[message.guild.id];
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    }
    else if (mess.startsWith(prefix + 'join')) {
        if (!message.member.voiceChannel) return message.channel.send('\`You Must be  in a Voice Channel.\`').then(message => message.delete(5000) );
        message.member.voiceChannel.join().then(message.channel.send('Joined ✔'));
    }
    
});

function skip_song(message) {
        if (!message.member.voiceChannel) return message.channel.send('\`You Must be  in a Voice Channel.\`').then(message => message.delete(5000) );
    dispatcher.end();
}

function playMusic(id, message) {
    voiceChannel = message.member.voiceChannel;


    voiceChannel.join().then(function(connectoin) {
        let stream = ytdl('https://www.youtube.com/watch?v=' + id, {
            filter: 'audioonly'
        });
        skipReq = 0;
        skippers = [];

        dispatcher = connectoin.playStream(stream);
        dispatcher.on('end', function() {
            skipReq = 0;
            skippers = [];
            queue.shift();
            queueNames.shift();
            if (queue.length === 0) {
                queue = [];
                queueNames = [];
                isPlaying = false;
            }
            else {
                setTimeout(function() {
                    playMusic(queue[0], message);
                }, 500);
            }
        });
    });
}

function getID(str, cb) {
    if (isYoutube(str)) {
        cb(getYoutubeID(str));
    }
    else {
        search_video(str, function(id) {
            cb(id);
        });
    }
}

function add_to_queue(strID) {
    if (isYoutube(strID)) {
        queue.push(getYoutubeID(strID));
    }
    else {
        queue.push(strID);
    }
}
function search_video(query, callback) {
     request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
    
    var json = JSON.parse(body);
    if (!json.items[0]) {
      callback('5FjWe31S_0g');
    } else {
      callback(json.items[0].id.videoId);
    }
 });
}



function isYoutube(str) {
    return str.toLowerCase().indexOf('youtube.com') > -1;
}
 client.on("message", message => {
 if (message.content === `${prefix}`) {
  const embed = new Discord.RichEmbed() //by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
      .setColor("#000000")//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
      .setDescription(`
${prefix}play ⇏ لتشغيل أغنية برآبط أو بأسم
${prefix}skip ⇏ لتجآوز الأغنية الحآلية
${prefix}pause ⇏ إيقآف الأغنية مؤقتا
${prefix}resume ⇏ لموآصلة الإغنية بعد إيقآفهآ مؤقتا
${prefix}vol ⇏ لتغيير درجة الصوت 100 - 0
${prefix}stop ⇏ لإخرآج البوت من الروم

 `)//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
   message.channel.sendEmbed(embed)//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
    
   }
   }); 
 
 

 
 
 client.login(process.env.BOT_TOKEN);
