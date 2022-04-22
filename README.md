# Canary bot 🤖
</hr>
A multipurpose discord bot that uses <i>only</i> slash commands. Currently a work in progress...

## TODO 📃
</hr>
<ul>
  <li>Economy system</li>
  <li>Music (play, playlist, lyrics...)</li>
  <li>Emote stealer</li>
  <li>Gif emotes (hug, wave...)</li>
  <li>Moderation commands</li>
  <li>Mini-games</li>
</ul>

## Set up
Install required packages: <code>$ npm install</code>
</br></br>
Create a file named <code>.env</code> in the src directory, and add <code>guildId=yourGuildId</code>, <code>botToken=yourSecretToken</code>, and <code>environment=</code> (one of: debug, dev, prod). 
</br></br>
If you want to run the bot in multiple guilds, leave empty or remove <code>guildId=yourGuildId</code>.
</br>

## Development
</hr>

```
Start in development mode:
$ npm run start:dev 

Start in production mode:
$ npm run start:prod
```

## Compiling the code
</hr>

```
To compile the code:
$ npm run build

Running the compiled code:
$ npm run start:prod

or

$ node dist/index.js
```
