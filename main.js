const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready....');
    client.user.setActivity(',,help');
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
        
    if(message.content.match(/suicide/gi)) {
        if(message.author.bot) {
            return;
        } else {
            function randomNumber() {
                num = Math.floor(Math.random() * 10);
            };
            randomNumber();
            if(num === 1)
                message.channel.send(`${message.author} Suicide doesn’t end the chances of life getting worse, it eliminates the possibility of it ever getting any better.`);
            if(num === 2)
                message.channel.send(`${message.author} Never, never, never give up.`);
            if(num === 3)
                message.channel.send(`${message.author} If you’re looking for a sign not to kill yourself, this is it.`);
            if(num === 4)
                message.channel.send(`${message.author} Place your hand over your heart, can you feel it? That is called purpose. You’re alive for a reason so don’t ever give up.`);
            if(num === 5)
                message.channel.send(`${message.author} When you feel like giving up, just remember the reason why you held on for so long.`);
            if(num === 6)
                message.channel.send(`${message.author} At the end of the day, the fact that we have the courage to still be standing is reason enough to celebrate.`);
            if(num === 7)
                message.channel.send(`${message.author} Always remember you are braver than you believe, stronger than you seem, and smarter than you think and loved more than you know.`);
            if(num === 8)
                message.channel.send(`${message.author} You are imperfect, you are wired for struggle, but you are worthy of love and belonging.`);
            if(num === 9)
                message.channel.send(`${message.author} If you were born with the weakness to fall, you were born with the strength to rise.`);
            if(num === 10)
                message.channel.send(`${message.author} There are far, far better things ahead than anything we leave behind.`);
        };
    };
});

client.login(process.env.TOKEN);
// client.login(token);