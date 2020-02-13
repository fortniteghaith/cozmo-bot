const Discord = require('discord.js');
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (message.content === 'hello') {
        message.channel.send('Get your shit together, noodle-brain.');
    }
});

// Super secret token
client.login('secret');
