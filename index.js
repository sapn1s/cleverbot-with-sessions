/**
 * Created by Sap.
 */
let axios = require('axios');
let baseURL = `https://www.cleverbot.com/getreply?`
/**
 * Creates a new Cleverbot instance
 * @class
 */
class Cleverbot {
    /**
     * @param {string} apiKey - The cleverbot.com api key from https://www.cleverbot.com/api/my-account
     */
    constructor(apiKey) {
        if (!apiKey) throw new Error('You need to provide an API Key from https://www.cleverbot.com/api/my-account');
        this.apiKey = apiKey
        this.tweak1 = "";
        this.tweak2 = "";
        this.tweak3 = "";
    }

    /**
     * Sets the session id
     * @param {object} tweaks - The session id to use
     */

     //Tweak 1 varies from sensible to wacky
     //Tweak 2 from shy to talkative
     //Tweak 3 from self-centred to attentive
    setTweak(tweak1, tweak2, tweak3) {
        if(isNaN(tweak1) || isNaN(tweak2) || isNaN(tweak3 )) throw new Error("Tweak values must be numbers")
        if (tweak1 > 100 && tweak1 < -1 || tweak2 > 100 && tweak2 < -1|| tweak3 > 100 && tweak3 < -1) throw new Error("Tweak values must be between 0 and 100")
        if(tweak1 != -1) this.tweak1 = tweak1
        else this.tweak1 = "";
        if(tweak2 != -1) this.tweak2 = tweak2
        else this.tweak2 = "";
        if(tweak3 != -1) this.tweak3 = tweak3
        else this.tweak3 = "";
    }

    /**
     * Sends a question to the api
     * @param input - the input message
     * @param sesssion - the input message
     * @return {Promise}
     */
    ask(input, cs = "") {
        return new Promise((resolve, reject) => {
            if (!input) reject('No input given');
            axios.get(baseURL, {
                params: {
                    key: this.apiKey,
                    input : input,
                    cs : cs,
                    cb_settings_tweak1 : this.tweak1,
                    cb_settings_tweak2 : this.tweak2,
                    cb_settings_tweak3 : this.tweak3


                }
              })
              .then(function (response) {
                  let resObj = {
                      "cs" : response.data.cs,
                      "output" : response.data.output
                  }
                  resolve(resObj)
              })
              .catch(function (error) {
                reject(console.log(error));
              })
        });
    }
}
module.exports = Cleverbot;
