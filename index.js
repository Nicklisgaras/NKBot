const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzU5MDEzNzYyMDMxNjgxNTM3.X23Upg.F0ya2DSCUq1iuFaEJNFTwS4ND40';

const fs = require('fs');
const { join } = require('path');

const PREFIX = 'nk;';

bot.on('ready', () =>{
    console.log('NKBot is now online! ');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'info':
            const info = new Discord.MessageEmbed()
                .setColor('#09a012')
                .setTitle('Info!')
                .setURL('')
                .setAuthor('NKBot', 'https://steamuserimages-a.akamaihd.net/ugc/1016069769258051770/CA9B6F6E8E10E457BB1C4333ED1D8B2E98E7EBDE/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')
                .setDescription('Information!')
                .setThumbnail('https://steamuserimages-a.akamaihd.net/ugc/1016069769258051770/CA9B6F6E8E10E457BB1C4333ED1D8B2E98E7EBDE/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')
                .addFields(
                    { name: 'This bot is still in development', value: 'Some commands are unavailable.', inline: true },
                )
                .setImage('')
                .setTimestamp()
                .setFooter('nk;info');

            message.channel.send(info);
            break;
        case 'invite':
            message.channel.send('Invite me here! https://bit.ly/34jg6Mh');
                break;     
        case 'code':
            message.reply('The coding language is Dicord.js, powered by Node.js (https://nodejs.org/).');
                break;
        case 'me-ping':
            message.reply('')
                break;
        case 'no':
            message.channel.send('You did it anyways... Im not proud of you')
                break;
        case 'kill':
            message.channel.send('YOU KILLED THEM! IM CALLING THE FREAKING COPS')
                break;
        case 'hi':
            message.reply('no')
                break;
        case 'whydoesthisbotexist':
            message.channel.send('irdk')
                break;
        case 'hug':
            message.channel.send('You hugged {user} :)')
                break;
        case 'kiss':
            message.channel.send('You kissed them! Cute')
                break;
        case 'ytp':
            message.channel.send('https://www.youtube.com/watch?v=_9Qmg6WuPm4')
                break;
        case 'gay':
            message.reply('ur gay.')
                break;
        case 'boop':
            message.channel.send('You booped them. UwU')
                break;
        case 'punch':
            message.channel.send('You punched them. ouch')
                break;
        case 'oop':
            const ew = new Discord.MessageEmbed()
                .setColor('#09a012')
            message.channel.send(ew)
                    break;
        case 'support':
            const support = new Discord.MessageEmbed()
                .setColor('#09a012')
                .setTitle('Support the creator!')
                .setURL('')
                .setAuthor('NKBot', 'https://steamuserimages-a.akamaihd.net/ugc/1016069769258051770/CA9B6F6E8E10E457BB1C4333ED1D8B2E98E7EBDE/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')
                .setDescription('Support links!')
                .setThumbnail('https://steamuserimages-a.akamaihd.net/ugc/1016069769258051770/CA9B6F6E8E10E457BB1C4333ED1D8B2E98E7EBDE/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')
                .addFields(
                    { name: 'His server:', value: 'https://discord.gg/wqXtaKr' },
                    { name: '\u200B', value: '\u200B' },
                    { name: 'His Youtube:', value: 'https://bit.ly/2Hk7yNg', inline: true },
                    { name: 'His Twitch:', value: 'https://bit.ly/2Hd19UA', inline: true },
                    { name: 'His Github:', value: 'https://bit.ly/34dlB0e', inline: true },
                    { name: 'His Reddit:', value: 'https://bit.ly/3lZFON8', inline: true },
                    { name: 'His Patreon:', value: 'https://bit.ly/34nvdpo', inline: true },
                    {name: 'Other very cool people:', value: '@Destroyer8018#4997', inline: true },

                )
                .setImage('')
                .setTimestamp()
                .setFooter('nk;support');

            message.channel.send(support);
                    break;
        case 'help':
            const help = new Discord.MessageEmbed()
                .setColor('#09a012')
                .setTitle('Commands!')
                .setURL('')
                .setAuthor('NKBot', 'https://steamuserimages-a.akamaihd.net/ugc/1016069769258051770/CA9B6F6E8E10E457BB1C4333ED1D8B2E98E7EBDE/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')
                .setDescription('The commands of the bot! (the prefix is nk;)')
                .setThumbnail('https://steamuserimages-a.akamaihd.net/ugc/1016069769258051770/CA9B6F6E8E10E457BB1C4333ED1D8B2E98E7EBDE/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')
                .addFields(
                    { name: 'The commands', value: 'nk;help: This command!' },
                    { name: '\u200B', value: '\u200B' },
                    { name: 'nk;info:', value: 'General information', inline: true },
                    { name: 'nk;invite:', value: '_invite:Invite me to your server!', inline: true },
                    { name: 'nk;code:', value: 'How was this bot made???', inline: true },
                    { name: 'nk;support:', value: 'Support links', inline: true },
                    { name: 'nk;me-ping:', value: 'You will just get pinged by the bot', inline: true },
                    { name: 'nk;no:', value: 'Dont do this command! Im serious! Dont.', inline: true },
                    { name: 'nk;kill:', value: 'You dont need to be a criminal like that. Prison really isnt fun', inline: true },
                    { name: 'nk;hi:', value: 'Hi!', inline: true },
                    { name: 'nk;whydoesthisbotexist:', value: '...', inline: true },
                    { name: 'nk;hug:', value: 'Give someone huggies!', inline: true },
                    { name: 'nk;kiss:', value: 'Kiss someone!', inline: true },
                    { name: 'nk;ytp:', value: 'I will send a lovely video', inline: true },
                    { name: 'nk;gay:', value: '🏳️‍🌈', inline: true },
                    { name: 'nk;boop:', value: 'Boop someone', inline: true },
                    { name: 'nk;punch:', value: 'Punch someone.', inline: true },
                    { name: 'nk;oop:', value: 'I was bored ok?', inline: true },

                )
                .setImage('')
                .setTimestamp()
                .setFooter('nk;help');

            message.channel.send(help);
                break;

        case 'random-embed':
            const uwu = new Discord.MessageEmbed()
                .setColor('#09a012')
                .setTitle('^_^')
                .setURL('')
                .setAuthor('NKBot', 'https://steamuserimages-a.akamaihd.net/ugc/1016069769258051770/CA9B6F6E8E10E457BB1C4333ED1D8B2E98E7EBDE/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')
                .setDescription('a random embed')
                .setThumbnail('https://steamuserimages-a.akamaihd.net/ugc/1016069769258051770/CA9B6F6E8E10E457BB1C4333ED1D8B2E98E7EBDE/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false')
                .addFields(
                    { name: 'Type nk;help', value: 'for commands..' }

                )
                .setImage('')
                .setTimestamp()
                .setFooter('nk;random-embed');

            message.channel.send(uwu);
            break;
}

    if (message.content === 'NKBot') {
    message.react('👀');
    }

    if (message.content === 'hi') {
        message.react('👋');
    }

    if (message.content === 'hello') {
        message.react('👋')
    }

    if (message.content === 'hey') {
        message.react('👋')
    }

    if (message.content === 'nkbot') {
        message.react('👀');
    }

})




fs.readdirSync('./src/events/').forEach((dir) => {
    const events = fs.readdirSync(`./src/events/${dir}/`).filter((file) => file.endsWith('.js'));
    for (let file of events) {
        const evt = require(`./src/events/${dir}/${file}`);
        let eName = file.split('.')[0];
        console.log(`The ${eName} event has loaded`);
        bot.on(eName, evt.bind(null, bot));
    }
})


bot.login(token);
