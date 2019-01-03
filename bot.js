const Discord = require('discord.js')
const bot = new Discord.Client()
bot.on('ready', ()=>{
    console.log("Ai am back!");
    bot.user.setStatus('invisible')
    bot.user.setPresence({
        game: {
            name: 'Lăn ra ngủ rồi',
            type: "PLAYING"
        }
    })
    setTimeout(function(){
        sendMessage();
        var dayMillseconds = 1000 * 60 * 60 * 24;
        setInterval(function(){
            sendMessage();
        }, dayMillseconds)
    }, leftToEight())
})
function leftToEight(){
    var d = new Date();
    return (-d + d.setHours(3,0,0,0));
}
function sendMessage(){
    var guild = bot.guilds.get('413303388030107658');
    if(guild && guild.channels.get('530288707467608065')){
        guild.channels.get('530288707467608065').send("Sắp có rồng kìa, chuẩn bị go pro thôi các giáo sư @Go pro !!!");
    }
}
bot.login("process.env.BOT_TOKEN");
