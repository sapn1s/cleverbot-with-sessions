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

| Param | Type | Optional | Default | Description |  
| --- | --- | --- | --- | --- |
| input | String | No | | Input message. |
| cs | String | Yes | "" | Previously obtained cleverbot state (session) to continue from (default if new conversation). |

```javascript
let input = "Hello"

bot.ask(input, cs).then(response => {
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

| Param | Type | Optional | Default | Description |  
| --- | --- | --- | --- | --- |
| tweak1 | Integer | Yes | -1 | Tweak from sesnsible(0) to wacky(100). |
| tweak2 | Integer | Yes | -1 | Tweak from shy(0) to talkative(100). |
| tweak3 | Integer | Yes | -1 | Tweak from self-centred(0) to attentive(100). |


*Pass `-1` if you want to reset it to default

```javascript
bot.setTweak(-1, 0, 90)
```

To fully enjoy sessions - store `cs` and `tweaking` values.
Remember to `setTweak()` before each time you change session, unless you want to use the same tweak settings.

>Made by Sap#7777