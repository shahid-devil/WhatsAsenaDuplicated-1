  
const Asena = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const dil = require('axios');

const das = "El grupo extrae sus datos en metadatos."

Asena.addCommand({ pattern: 'infogroup', fromMe: true, desc: das }, async (message, match) => { 

    const ppUrl = await message.client.getProfilePicture(message.jid) 

    const json = await message.client.groupMetadata(message.jid) 

    const resim = await dil.get(ppUrl, {responseType: 'arraybuffer'})

    await message.client.sendMessage(
        Buffer.from(resim.data), 
        MessageType.image, 
        { caption: "*ID del Grupo:* " + json.id + "\n*Nombre del Grupo* " + json.subject + "\n*Descripción:* " + json.desc }
    );

});
