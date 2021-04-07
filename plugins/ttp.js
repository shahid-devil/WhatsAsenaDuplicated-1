/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const Config = require('../config');
const fs = require('fs');
const axios = require('axios');
const GW = "Convierte el texto en una foto de neón oscuro."
const NM = "Envía una pancarta de anime."

const Language = require('../language');
const Lang = Language.getString('ttp');

if (Config.WORKTYPE == 'private') {

Asena.addCommand({ pattern: 'ttp ?(.*)', fromMe: true }, (async (message, match) => {
           
    if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text);

    var ttinullimage = await axios.get(`https://api.xteam.xyz/ttp?file&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'animettp ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/narutobanner/?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'attp ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://api.xteam.xyz/attp?file&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })

}));

Asena.addCommand({ pattern: 'firettp ?(.*)$', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/flaming?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&APIKEY=e67bd1bafe81b611`, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'neonttp ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://api.xteam.xyz/textpro/neon?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&APIKEY=e67bd1bafe81b611`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'avengersttp ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var topText, bottomText;
    if (match[1].includes(':')) {
        var split = match[1].split(':');
        topText = split[1];
        bottomText = split[0];
    }
	else {
        topText = match[1];
        bottomText = '';
    }
    
    var ttinullimage = await axios.get(`https://api.xteam.xyz/textpro/3davengers?text=${topText.replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&text2=${bottomText.replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&APIKEY=e67bd1bafe81b611`, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'leafttp ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://api.xteam.xyz/textpro/naturalleaves?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&APIKEY=e67bd1bafe81b611`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'harryttp ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/harrypotter?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&APIKEY=e67bd1bafe81b611`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'glowttp ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/glowingneon/?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'galaxyttp ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://api.xteam.xyz/textpro/neongalaxy?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&APIKEY=e67bd1bafe81b611`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'shadowttp ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'coffeettp ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/coffeecup/?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'paperttp ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/burnpaper/?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'lovettp ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text1=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'bf4ttp ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var topText, bottomText;
    if (match[1].includes(':')) {
        var split = match[1].split(':');
        topText = split[1];
        bottomText = split[0];
    }
	else {
        topText = match[1];
        bottomText = '';
    }
    
    var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/bf4/?text=${topText.replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&text2=${bottomText.replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&APIKEY=e67bd1bafe81b611`, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'thunderttp ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/thundertext?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&APIKEY=e67bd1bafe81b611`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

    }));
}

else if (Config.WORKTYPE == 'public') {

Asena.addCommand({ pattern: 'ttp ?(.*)', fromMe: true }, (async (message, match) => {
           
    if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text);

    var ttinullimage = await axios.get(`https://api.xteam.xyz/ttp?file&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'animettp ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/narutobanner/?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'attp ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://api.xteam.xyz/attp?file&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })

}));

Asena.addCommand({ pattern: 'firettp ?(.*)$', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/flaming?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&APIKEY=e67bd1bafe81b611`, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'neonttp ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://api.xteam.xyz/textpro/neon?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&APIKEY=e67bd1bafe81b611`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'avengersttp ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var topText, bottomText;
    if (match[1].includes(':')) {
        var split = match[1].split(':');
        topText = split[1];
        bottomText = split[0];
    }
	else {
        topText = match[1];
        bottomText = '';
    }
    
    var ttinullimage = await axios.get(`https://api.xteam.xyz/textpro/3davengers?text=${topText.replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&text2=${bottomText.replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&APIKEY=e67bd1bafe81b611`, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'leafttp ?(.*)', fromMe: false }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://api.xteam.xyz/textpro/naturalleaves?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&APIKEY=e67bd1bafe81b611`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'harryttp ?(.*)', fromMe: false }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/harrypotter?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&APIKEY=e67bd1bafe81b611`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'glowttp ?(.*)', fromMe: false }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/glowingneon/?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'galaxyttp ?(.*)', fromMe: false }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://api.xteam.xyz/textpro/neongalaxy?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&APIKEY=e67bd1bafe81b611`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'shadowttp ?(.*)', fromMe: false }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'coffeettp ?(.*)', fromMe: false }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/coffeecup/?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'paperttp ?(.*)', fromMe: false }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/burnpaper/?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'lovettp ?(.*)', fromMe: false }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text1=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'bf4ttp ?(.*)', fromMe: false }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var topText, bottomText;
    if (match[1].includes(':')) {
        var split = match[1].split(':');
        topText = split[1];
        bottomText = split[0];
    }
	else {
        topText = match[1];
        bottomText = '';
    }
    
    var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/bf4/?text=${topText.replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&text2=${bottomText.replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&APIKEY=e67bd1bafe81b611`, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

}));

Asena.addCommand({ pattern: 'thunderttp ?(.*)', fromMe: false }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/thundertext?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&APIKEY=e67bd1bafe81b611`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*' })

    }));
}
