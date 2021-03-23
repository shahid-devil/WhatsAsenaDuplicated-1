/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const speedTest = require('@lh2020/speedtest-net');
const TinyURL = require('tinyurl');

const Language = require('../language');
const con = require('../config');

// https://github.com/ddsol/speedtest.net/blob/master/bin/index.js#L86
function speedText(speed) {
    let bits = speed * 8;
    const units = ['', 'K', 'M', 'G', 'T'];
    const places = [0, 1, 2, 3, 3];
    let unit = 0;
    while (bits >= 2000 && unit < 4) {
      unit++;
      bits /= 1000;
    }

    return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
}

if (con.WORKTYPE == 'public') {
  
Asena.addCommand({pattern: 'short ?(.*)', fromMe: false, desc: Lang.URL}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, SLang.LİNK, MessageType.text);

    TinyURL.shorten(`${match[1]}`, async(res, err) => {
      if (err)
        await message.client.sendMessage(message.jid, '*#### ¡Error! ####*\n\n' + '```' + err + '```', MessageType.text);

        await message.client.sendMessage(message.jid,`*Enlace original:* ${match[1]}\n*Enlace corto:* ` + res, MessageType.text)
         });
    }));
 }

else if (con.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'short ?(.*)', fromMe: true, desc: Lang.URL}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, SLang.LİNK, MessageType.text);

    TinyURL.shorten(`${match[1]}`, async(res, err) => {
      if (err)
        await message.client.sendMessage(message.jid, '*#### ¡Error! ####*\n\n' + '```' + err + '```', MessageType.text);

        await message.client.sendMessage(message.jid,`*Enlace original:* ${match[1]}\n*Enlace corto:* ` + res, MessageType.text)
         });
    }));
 }
