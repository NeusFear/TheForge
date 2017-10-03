const Discord = require('discord.js');
const fs = require('fs');
const Gamedig = require('gamedig');
const bot = new Discord.Client();
const token = "MzQzMDU4MDU4MDg1NDAwNTc3.DGaHLw.0hMP87zUVPJ1QBHsntthhF1UbVY";
const website = "**http://theforgecommunity.com/**";
const prefix = "!";

function includes(k) {
  for(var i=0; i < this.length; i++){
    if( this[i] === k || ( this[i] !== this[i] && k !== k ) ){
      return true;
    }
  }
  return false;
}

bot.login(token);
bot.user.setPresence({ status: 'online', game: { name: '!help for help.' } });

bot.on('ready', () => {
  console.log('TheForge bot is now ready.');
  message.guild.channels.find("logs", "TheForge").sendMessage("Bot Started");
});

bot.on('disconnect', () +> {
  message.guild.channels.find("logs", "TheForge").sendMessage("Bot Stopped");
});

bot.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else if (message.content.startsWith(prefix + "help")) {
    const embed = new Discord.RichEmbed()
      .setAuthor("The Forge", bot.user.avatarURL)
      .setColor(0xffc342)
      .setDescription("This is a list of commands I can do:")
      .addField("Commands:", "!help\n!ping\n!info\n!website\n!invite\n!online\n!iplay", true)
      .addField("Description:", "Displays the help menu.\nPong!\nDisplays the info Field.\nView a link to our website.\nGet an invite link.\nView players on our servers.\nAdds game roles **!iplay** for more info.", true)
      .setFooter("Bot made with ❤ by SkyForge | Contact them for support.")
      .setThumbnail(bot.user.avatarURL)

      message.channel.send({embed});

  } else if (message.content.startsWith(prefix + "online ark")) {
      Gamedig.query({
        type: 'arkse',
        host: 'theforgeark.com',
        port: '7777'
      }).then((state) => {
        console.log(state);
        var players = state.players;
        console.log("\n" + players + "\n");
        var list = [];
        for(var name in players) {
          console.log(players[name].name);
          list.push(players[name].name);
        }

        if(list.length > 0) {
          const embed = new Discord.RichEmbed()
            .setAuthor("The Forge", bot.user.avatarURL)
            .setColor(0xffc342)
            .setDescription("Online Ark Players: " + list.length + " / " + state.maxplayers)
            .addField("Online:", list.toString(), true)
            .setFooter("Bot made with ❤ by SkyForge | Contact them for support.")
            message.channel.send({embed});
        } else {
          const embed = new Discord.RichEmbed()
            .setAuthor("The Forge", bot.user.avatarURL)
            .setColor(0xffc342)
            .setDescription("No online players...")
            .setFooter("Bot made with ❤ by SkyForge | Contact them for support.")
            message.channel.send({embed});
        }

      }).catch((error) => {
        console.log(error);
      });

  } else if (message.content.startsWith(prefix + "online")) {
    str = message.content;
    arr = str.split(" ");
    if(!arr[1]) {
      const embed = new Discord.RichEmbed()
        .setAuthor("The Forge", bot.user.avatarURL)
        .setColor(0xffc342)
        .setDescription("Servers you can view players on")
        .addField("Commands:", "!online mc\n!online ark", true)
        .addField("Description:", "View minecraft server players\nView ark server players", true)
        .setFooter("Bot made with ❤ by SkyForge | Contact them for support.")
        .setThumbnail(bot.user.avatarURL)
        message.channel.send({embed});
    }

  } else if (message.content.startsWith(prefix + "info")) {
    const embed = new Discord.RichEmbed()
      .setAuthor("The Forge", bot.user.avatarURL)
      .setColor(0xffc342)
      .setDescription("About TheForge:")
      .addField("Who are we?", "TheForge started as a group of friends who liked to play games, simple enough. We had a vision to make a community of players that like dto play the same games as us so we dont have that one guy in the squad who dosent know what they're doing and has their VOP Volume all the way down.", true)
      .addField("What's our goal?", "We want to make it easy for gamers to find games they'll love. On top of the community on discord you can ask, you can also consult our website, where we have reviews by REAL gamers, who arent biased or partnered with a huge company.", true)
      .addField("How do I get Involved?", "Getting to be apart of the community is really easy here on TheForge, you can do anything from saying 'Hi' on the forums or on discord, or you could join a voice channel and squad up with some other members of the community.", true)
      .setFooter("Bot made with ❤ by SkyForge | Contact them for support.")

      message.channel.send({embed});
  } else if (message.content.startsWith(prefix + "website")) {
    const embed = new Discord.RichEmbed()
      .setAuthor("The Forge", bot.user.avatarURL)
      .setColor(0xffc342)
      .setDescription("Our website is: " + website)

      message.channel.send({embed});
  } else if (message.content.startsWith(prefix + "servers")) {
    const embed = new Discord.RichEmbed()
      .setAuthor("The Forge", bot.user.avatarURL)
      .setColor(0xffc342)
      .setDescription("TheForge Servers:")
      .addField("Ark: *theforgeark.com*", "go to theforgecommunity.com/arktutorial.php for more info.")

      message.channel.send({embed});

  } else if (message.content.startsWith(prefix + "dick")) {
    const embed = new Discord.RichEmbed()
      .setAuthor("The Forge", bot.user.avatarURL)
      .setColor(0xffdbaa)
      .setDescription("Size Comparison: Bryce vs. Brandon")
      .addField("Bryce", ":-")
      .addField("Brandon", "8=====================================)")
      .setFooter("Pictures taken with ❤ by SkyForge | Contact them for more.")
      message.channel.send({embed});

  } else if (message.content.startsWith("hi theforge")) {
    message.reply('Hi!');

  } else if (message.content.startsWith(prefix + "welcome")) {
    console.log(message.author.username);
    if (message.author.username === "SkyForge") {
      const embed = new Discord.RichEmbed()
        .setAuthor("Welcome to TheForge", bot.user.avatarURL)
        .setColor(0xffc342)
        .setDescription("We are a new modern gaming community that aims to make a fun and helpful experience for today's video game loving community.")
        .setFooter("Bot made with ❤ by SkyForge | Contact them for support.")
        .setThumbnail(bot.user.avatarURL)
        .addField("Rules:", "**1)** Use the channels for their specified topic, please...\n**2)** Don't spam our text channels, no one wants all those notifications...\n**3)** If you have WWIII going on in the background, don't join a Voice Channel.\n**4)** Keep the racial slurs to a minimum.")
        .addField("Channels:", "**#welcome** : This channel is for infomation... you're reading it now.\n**#announcements** : Find out what's new in the community.\n**#ideas** : Submit suggestions here\n**#random** : Used for, casual chat, dank memes, links, etc.")
        .addField("Other Channels:", "**#ark** : For our (Currently in Development) Server\n**#minecraft** : For our custom *@Minecraft* (Currently in Development)")
        .addField("Roles:", "**@Admin** - who manage the game serevrs, website, and forums\n**@Moderator** - keep those pesky trolls under their bridges\n**@B** - A useless role for sexy people\n**@Privledged** - Has extra permissions on the Discord.\n**@Associate** - Sometimes we associate with them.\n**@<Game>** - People who play a game. (*duh*)")
        .addField("Website:", "*Our website is currently being made:*\nProject led by: **@SkyForge** \nHelp from: **@TonyMaster21**")
        .addField("Our Dedicated Servers", "**Ark:** *coming soon*\n**Minecraft:** *coming soon*")

        message.channel.send({embed});
    }
  } else if (message.content.startsWith(prefix + "invite")) {
  console.log(message.author.username);
    const embed = new Discord.RichEmbed()
      .setAuthor("Invite your friends!", bot.user.avatarURL)
      .setColor(0xffc342)
      .setDescription("One of the best ways for our community to grow is by word of mouth, help us out. :D")
      .setFooter("Bot made with ❤ by SkyForge | Contact them for support.")
      .setThumbnail(bot.user.avatarURL)
      .addField("Invite Link:", "This link never expires! So no more timeout invites.\nPlease, make sure your friends read the rules.\nhttps://discord.gg/T9RUr3b")

      message.channel.send({embed});


    } else if (message.content.startsWith(prefix + "iplay")) {
      str = message.content;
      arr = str.split(" ");
      let member = message.member;

      const embed = new Discord.RichEmbed()
        .setColor(0xffc342)
        .setDescription("Added game Role **" + arr[1] + "** to "  + message.author)
        .setFooter("Bot made with ❤ by SkyForge | Contact them for support.")
      if(!arr[1]){
        const embed = new Discord.RichEmbed()
          .setColor(0xffc342)
          .setDescription("**You have to specify the game you play.**")
          .setThumbnail(bot.user.avatarURL)
          .addField("Games:", "!iplay ark\n!iplay battlefield\n!iplay csgo\n!iplay forhonor\n!iplay gmod\n!iplay gta\n!iplay miscreated\n!iplay minecraft\n!iplay rust")
          .setFooter("Bot made with ❤ by SkyForge | Contact them for support.")
          message.channel.send({embed});
      }
      if(arr[1] === "battlefield") {
        let role = message.guild.roles.find("name", "Battlefield");
        member.addRole(role).catch(console.error);
        message.channel.send({embed});
      } else if (arr[1] === "csgo") {
        var role = message.guild.roles.find("name", "CS:GO");
        member.addRole(role).catch(console.error);
        message.channel.send({embed});
      } else if (arr[1] === "forhonor") {
        var role = message.guild.roles.find("name", "For Honor");
        member.addRole(role).catch(console.error);
        message.channel.send({embed});
      } else if (arr[1] === "gmod") {
        var role = message.guild.roles.find("name", "Gmod");
        member.addRole(role).catch(console.error);
        message.channel.send({embed});
      } else if (arr[1] === "gta") {
        var role = message.guild.roles.find("name", "GTA");
        member.addRole(role).catch(console.error);
        message.channel.send({embed});
      } else if (arr[1] === "miscreated") {
        var role = message.guild.roles.find("name", "Miscreated");
        member.addRole(role).catch(console.error);
        message.channel.send({embed});
      } else if (arr[1] === "minecraft") {
        var role = message.guild.roles.find("name", "Minecraft");
        member.addRole(role).catch(console.error);
        message.channel.send({embed});
      } else if (arr[1] === "rust") {
        var role = message.guild.roles.find("name", "Rust");
        member.addRole(role).catch(console.error);
        message.channel.send({embed});
      } else if (arr[1] === "ark") {
        var role = message.guild.roles.find("name", "Ark");
        member.addRole(role).catch(console.error);
        message.channel.send({embed});
      } else {
        if(arr[1]){
          const embed = new Discord.RichEmbed()
            .setColor(0xffc342)
            .setDescription("I dont't recognize that Role")
            .setFooter("Bot made with ❤ by SkyForge | Contact them for support.")
            message.channel.send({embed});
        }
      }
    } else {
        const embed = new Discord.RichEmbed()
          .setColor(0xffc342)
          .setDescription("I dont recognise that command, use ``!help`` for a list of my commands.")
          .setFooter("Bot made with ❤ by SkyForge | Contact them for support.")
          message.channel.send({embed});
    }
});



































bot.on('message', message => {
  if (message.content === '!embed') {
    const embed = new Discord.RichEmbed()
      .setTitle("This is your title, it can hold 256 characters")
      .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
      .setAuthor("The Forge", bot.user.avatarURL)
      .setColor(0xffc342)
      .setDescription("This is the main body of text, it can hold 2048 characters.")
      .setFooter("This is the footer text, it can hold 2048 characters", bot.user.avatarURL)
      .setImage("https://i.gyazo.com/1095e28a94a827b5f42a64d0ecf8e30a.png")
      .setThumbnail(bot.user.avatarURL)
      .setTimestamp()
      .addField("This is a field title, it can hold 256 characters", "This is a field value, it can hold 2048 characters.")
      .addField("Inline Field", "They can also be inline.", true)
      .addBlankField(true)
      .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

      message.channel.send({embed});
  }
});
