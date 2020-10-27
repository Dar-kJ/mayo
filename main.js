const Discord = require('discord.js');
const path = require('path');
const { token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready.....');
    client.user.setActivity(',,help');
    const channel = guild.channels.find(ch => ch.name === '#┊꒰꒰☄･ﾟ꒱・botsˎˊ');
    channel.send('kiss, :kissing_cat:');
});

client.on('message', message => {
    if(message.content === `Who's the founder of this server?`)
        message.channel.send(`Frankie, our previous owner. They created this server and brought all of these amazing people together in July of 2020.`);

    if(message.content === `Where can I apply for staff?`)
        message.channel.send(`Located in extra lies the staff application channel. You can apply but please do not make any troll applications. They will not be taken seriously and they will be deleted.`);

    if(message.content === `Who can I DM for partnerships?`)
        message.channel.send(`Any of our PMS or Seo.`);

    if(message.content === `What is Shinyu?`)
        message.channel.send(`Close friends of Seo.`);

    if(message.content === `Who do I DM if somebody is acting up? `)
        message.channel.send(`Any of the owners or admins. They will respond to the issue as fast as they possibly can.`);
    
    if(message.content === `What are roles?`)
        message.channel.send(`They show others who you are and basically your bio. You can locate roles under the member category. If a role is not working, contact a staff member.`);
});



client.login(process.env.TOKEN);
// client.login(token);