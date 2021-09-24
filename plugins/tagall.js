/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('tagall');

async function checkAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

Asena.addCommand({pattern: 'tagall ?(.*)', fromMe: false, onlyGroup: true, desc: Lang.TAGALL_DESC }, (async (message, match) => {

    var im = await checkImAdmin(message);
    var userad = await checkAdmin(message);
    if (!userad) return await message.client.sendMessage(message.jid,Lang.USER_NOT_ADMIN,MessageType.text);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (match[1] !== '') {
        grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(
            async (uye) => {
                mesaj += '@' + uye.id.split('@')[0] + ' ';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        );
        await message.client.sendMessage(message.jid,`${match[1]}`, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }
    else if (match[1] == '') {
        grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(
            async (uye) => {
                mesaj += '@' + uye.id.split('@')[0] + ' ';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        );
        await message.client.sendMessage(message.jid,mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }
    else if (message.reply_message && match[1] == '') {
        grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(
            async (uye) => {
                mesaj += '@' + uye.id.split('@')[0] + ' ';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        );
        await message.client.sendMessage(message.jid,message.reply_message.text, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }
}));
