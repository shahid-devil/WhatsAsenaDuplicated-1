/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('webss');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'ss ?(.*)', fromMe: true, desc: Lang.SS_DESC}, (async (message, match) => {
        
        if (match[1] === '') return await message.sendMessage(message.jid, Lang.LİNK, MessageType.text);

        var webimage = await axios.get(`https://screenshotapi.net/api/v1/screenshot?url=${match[1]}&output=image&full_page=true`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, capion: 'Hecho por *Skueletor*'})

    }));
    
    const sh = "Genera rostros humanos que antes no existían con inteligencia artificial."
    Asena.addCommand({pattern: 'faceai ?(.*)', fromMe: true, desc: Lang.SS_DESC}, (async (message, match) => {
        
        if (match[1] === '') return await message.sendMessage(message.jid, Lang.LİNK, MessageType.text);

        var webimage = await axios.get(`https://screenshotapi.net/api/v1/screenshot?url=https://thispersondoesnotexist.com/&output=image&full_page=true`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, capion: 'Hecho por *Skueletor*'})

    }));

const dh = "Genera caras de anime que no existían antes con inteligencia artificial."
    Asena.addCommand({pattern: 'animai ?(.*)', fromMe: true, desc: Lang.SS_DESC}, (async (message, match) => {
        
        if (match[1] === '') return await message.sendMessage(message.jid, Lang.LİNK, MessageType.text);

        var webimage = await axios.get(`https://screenshotapi.net/api/v1/screenshot?url=https://www.thiswaifudoesnotexist.net/&output=image&full_page=true`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, capion: 'Hecho por *Skueletor*'})

    }));

}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'ss ?(.*)', fromMe: false, desc: Lang.SS_DESC}, (async (message, match) => {
        
        if (match[1] === '') return await message.sendMessage(message.jid, Lang.LİNK, MessageType.text);

        var webimage = await axios.get(`https://screenshotapi.net/api/v1/screenshot?url=${match[1]}&output=image&full_page=true`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, capion: 'Hecho por *Skueletor*'})

    }));
    const sh = "Genera rostros humanos que antes no existían con inteligencia artificial."
    Asena.addCommand({pattern: 'faceai ?(.*)', fromMe: false, desc: Lang.SS_DESC}, (async (message, match) => {
        
        if (match[1] === '') return await message.sendMessage(message.jid, Lang.LİNK, MessageType.text);

        var webimage = await axios.get(`https://screenshotapi.net/api/v1/screenshot?url=https://thispersondoesnotexist.com/&output=image&full_page=true`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, capion: 'Hecho por *Skueletor*'})

    }));

const dh = "Genera caras de anime que no existían antes con inteligencia artificial."
    Asena.addCommand({pattern: 'animai ?(.*)', fromMe: false, desc: Lang.SS_DESC}, (async (message, match) => {
        
        if (match[1] === '') return await message.sendMessage(message.jid, Lang.LİNK, MessageType.text);

        var webimage = await axios.get(`https://screenshotapi.net/api/v1/screenshot?url=https://www.thiswaifudoesnotexist.net/&output=image&full_page=true`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, capion: 'Hecho por *Skueletor*'})

    }));
}
