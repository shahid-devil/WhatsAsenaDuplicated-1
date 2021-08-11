const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
/*const got = require('got');
const fs = require('fs');*/
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('weather');
const { errorMessage, infoMessage } = require('../helpers');


Asena.addCommand({pattern: 'lngcode', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    

    await message.sendMessage('*Code:* en_US \n *Language:* English (US) \n\n *Code:* hi \n *Language:* Hindi \n\n *Code:* es \n *Language:* Spanish \n\n *Code:* fr \n *Language:* French \n\n *Code:* ja \n *Language:* Japanese \n\n *Code:* ru \n *Language:* Russian \n\n *Code:* en_GB \n *Language:* English (UK) \n\n *Code:* de \n *Language:* German \n\n *Code:* it \n *Language:* Italian \n\n *Code:* ko \n *Language:* Korean \n\n *Code:* pt-BR \n *Language:* Brazilian Portuguese \n\n *Code:* ar \n *Language:* Arabic \n\n *Code:* tr \n *Language:* Turkish \n\n');

}));



Asena.addCommand({pattern: 'dictionary ?(.*)', fromMe: true,  dontAddCommandList: true }, async (message, match) => {
	if (match[1] === '') return await message.reply("Necesito una palabra para investigar...");
       if (match[1].includes(';')) {
        var split = match[1].split(';');
        word = split[1];
        langcode = split[0];
         }
	else {
        word = match[1];
        langcode = 'es';
        }
       const url = `https://api.dictionaryapi.dev/api/v2/entries/es/${word}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
	       if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'* ' + "Palabra:" +'* ```' + json[0].word + '```\n' + 
		'* ' + "Fonética:" +'* ```' + json[0].phonetics[0].text + '```\n\n' + 
                '* ' + "Parte del discurso:" +'* ```' + json.result[0][0].partOfSpeech + '```\n' + 
		'* ' + "Definición 1:" +'* ```' + json[0].meanings[0].definitions[0].definition + '```\n' +                                                                          
                '* ' + "Sinónimos:" +'* ```' + json[0].meanings[0].definitions[0].synonyms[0] + '```\n' + 
                '* ' + "-" +'* ```' + json[0].meanings[0].definitions[0].synonyms[1] + '```\n' + 
                '* ' + "-" +'* ```' + json[0].meanings[0].definitions[0].synonyms[2] + '```\n' +  
                '* ' + "Uso:" +'* ```' + json[0].meanings[0].definitions[0].example + '```\n\n' +                                                                            
	 	'* ' + "Definición 2:" +'* ```' + json[0].meanings[0].definitions[1].definition + '```\n' +                                                                          
 	        '* ' + "Uso:" +'* ```' + json[0].meanings[0].definitions[1].example + '```\n\n\n' + 
                '* ' + "Parte del discurso:" +'* ```' + json[0].meanings[1].partOfSpeech + '```\n\n' + 
		'* ' + "Definición :" +'* ```' + json[0].meanings[0].definitions[0].definition + '```\n' +                                                                          
                '* ' + "Sinónimos:" +'* ```' + json[0].meanings[0].definitions[0].synonyms[0] + '```\n' + 
                '* ' + "-" +'* ```' + json[0].meanings[0].definitions[0].synonyms[1] + '```\n' +  
                '* ' + "Uso:" +'* ```' + json[0].meanings[0].definitions[0].example + '```\n\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, "error", MessageType.text);
	}
});




Asena.addCommand({ pattern: 'definition ?(.*)', fromMe: true, desc: "Use it as a dictionary.\nEg: .dict en_US;lead\n For supporting languages send *.lngcode*" }, async (message, match) => {

    if (!match[1]) return await message.sendMessage(errorMessage("Need word"))

 if (match[1].includes(';')) {
        var split = match[1].split(';');
        word = split[1];
        langcode = split[0];
         }
	else {
        word = match[1];
        langcode = 'es';
        }

    await message.sendMessage(infoMessage("Cargando..."))

	

   for (var i = 0; i < 5 ; i++) {
	  
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/es/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[i].meanings[i].definitions[i]

   
	
	const msg = `
        *${"Definición"}*: ${definition}    
        *${"Ejemplo"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })

      })
      .catch(
        async (err) => await message.sendMessage(""),
      )}
  },
)
