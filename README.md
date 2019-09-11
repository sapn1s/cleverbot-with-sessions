# cleverbot-with-sessions

A node.js client for talking to cleverbot.  
It allows to manage sessions and change bot's characteristics (tweaking).

## Installation:

Installation via `npm`:

     npm install cleverbot-with-sessions

##First time initiation:

To use cleverbot, you need an API key, which you can obtain here: https://www.cleverbot.com/api/my-account

```javascript
    const cleverbotWithSessions = require('cleverbot-with-sessions');
    
    let bot = new cleverbotWithSessions("YOUR-API-KEY")
```

##Usage

###Ask request:

Param 1: Input message   
Param 2: cs (optional) - previously obtained cleverbot state (session) to continue from (leave blank if new conversation)

```javascript
bot.ask("Hello", cs).then(response => {
    console.log(response)
})
```
###Response:

```javascript
{ cs:'MXYxCTh2MQlBdldYQ1BNM0U3MzUJMUZ2MTU2ODExMDQzNwk2NHZIZWxsby4JNjRpV2hhdCdzIHlvdXIgbmFtZT8J',
  output: "What's your name?" }
```

cs - this parameter stands for “cleverbot state”. It is the encoded state of the conversation so far and includes the whole conversation history up to that point. (Store it somewhere to return to this particular session, it changes after each request)


###Configuring tweaking

Param 1: value 0-100 (sensible to wacky)  
Param 2: value 0-100 (shy to talkative)  
Param 3:  value 0-100 (self-centred to attentive)  

*Pass `-1` if you want to reset it to default

```javascript
bot.setTweak(-1, 0, 90)
```

To fully enjoy sessions - store `cs` and `tweaking` values.
Remember to `setTweak()` before each time you change session, unless you want to use the same tweak settings.

>Made by Sap#7777