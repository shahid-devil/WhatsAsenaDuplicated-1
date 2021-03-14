/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
Developer & Co-Founder - Phaticusthiccy
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```El bot está funcionando correctamente 🐺 ```\n\n*Version:* ```'+Config.VERSION+'```\n*Creador:* https://telegram.dog/DKzippO\n*Grupo de Soporte:* https://chat.whatsapp.com/BdP7YyC2WBe1gs5wpQ0cAw\n*Canal de Telegram:* https://t.me/SkueletorSupport\n\n*Comandos del bot ✅*\n➡️ /alive – Verifica si funciona el bot.\n➡️ /removebg – Elimina el fondo de una fotografía que envíes.\n➡️ /mp4audio – Convierte un video en un audio.\n➡️ /imagesticker – Convierte un sticker en una foto.\n➡️ /ocr – escribe el texto que haya en una foto (tiene que ser visible).\n➡️ /trt – Traduce el texto el mensaje al idioma que quieras, debes responder al mensaje que quieras traducir (Ej.: /trt es it).\n➡️ /tts – Convierte el texto en un audio con la voz del Traductor de Google (Ej.: /tts hola).\n➡️ /yt – Busca videos en YouTube (enlace).\n➡️ /video – Descarga videos de YouTube debes colocar el enlace obtenido con el comando de arriba.\n➡️ /wiki – Busca algo en Wikipedia.\n➡️ /img – Busca alguna imagen desde Google Pictures (Ej.: /img Goku).\n➡️ /ss – Toma captura de pantalla desde el enlace que envíes (esto evitará que tengas que entrar a la página para ver su contenido).\n➡️ /animesay (Texto) – Escribe el texto dentro de la pancarta sostenida por una chica anime.\n➡️ /changesay (Texto) – Escribe el texto en un póster de Change My Mind.\n➡️ /trumpsay (Texto) – Escribe el texto en un Tweet de Donald Trump.\n➡️ /sticker (Responde una foto) – Crea un sticker de la foto dada, preferiblemente de una foto cuadrada.\n➡️ /ttp (Texto) – Convierte el texto en una foto.\n➡️ /attp (Texto) – Convierte el texto en sticker de colores.\n➡️ /unvoice – Convierte un audio en una nota de voz.\n➡️ /voicy – Traduce las oraciones dichas en la nota de voz en texto (aún está en modo de prueba, no siempre funciona).\n➡️ /wallpaper – Envía fondos de pantalla de alta resolución, hay muchos :D.\n➡️ /weather (Ciudad) – Envía el clima de la ciudad dada.\n➡️ /insta (nombre de usuario) – Obtén información acerca de una cuenta de Instagram.\n➡️ /gif (Respondiendo a un video) – Convierte un video en gif.\n➡️ /deepai - Una potente Inteligencia Artificial con varias funciones.\n\nPor favor, ten en cuenta que es un proyecto que aún está en desarrollo y puede contener fallas 🚧' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.ALIVEMSG + '\n*Powered by Skueletor*', MessageType.text);
        }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```El bot está funcionando correctamente 🐺 ```\n\n*Version:* ```'+Config.VERSION+'```\n*Creador:* https://telegram.dog/DKzippO\n*Grupo de Soporte:* https://chat.whatsapp.com/BdP7YyC2WBe1gs5wpQ0cAw\n*Canal de Telegram:* https://t.me/SkueletorSupport\n\n*Comandos del bot ✅*\n➡️ /alive – Verifica si funciona el bot.\n➡️ /removebg – Elimina el fondo de una fotografía que envíes.\n➡️ /mp4audio – Convierte un video en un audio.\n➡️ /imagesticker – Convierte un sticker en una foto.\n➡️ /ocr – escribe el texto que haya en una foto (tiene que ser visible).\n➡️ /trt – Traduce el texto el mensaje al idioma que quieras, debes responder al mensaje que quieras traducir (Ej.: /trt es it).\n➡️ /tts – Convierte el texto en un audio con la voz del Traductor de Google (Ej.: /tts hola).\n➡️ /yt – Busca videos en YouTube (enlace).\n➡️ /video – Descarga videos de YouTube debes colocar el enlace obtenido con el comando de arriba.\n➡️ /wiki – Busca algo en Wikipedia.\n➡️ /img – Busca alguna imagen desde Google Pictures (Ej.: /img Goku).\n➡️ /ss – Toma captura de pantalla desde el enlace que envíes (esto evitará que tengas que entrar a la página para ver su contenido).\n➡️ /animesay (Texto) – Escribe el texto dentro de la pancarta sostenida por una chica anime.\n➡️ /changesay (Texto) – Escribe el texto en un póster de Change My Mind.\n➡️ /trumpsay (Texto) – Escribe el texto en un Tweet de Donald Trump.\n➡️ /sticker (Responde una foto) – Crea un sticker de la foto dada, preferiblemente de una foto cuadrada.\n➡️ /ttp (Texto) – Convierte el texto en una foto.\n➡️ /attp (Texto) – Convierte el texto en sticker de colores.\n➡️ /unvoice – Convierte un audio en una nota de voz.\n➡️ /voicy – Traduce las oraciones dichas en la nota de voz en texto (aún está en modo de prueba, no siempre funciona).\n➡️ /wallpaper – Envía fondos de pantalla de alta resolución, hay muchos :D.\n➡️ /weather (Ciudad) – Envía el clima de la ciudad dada.\n➡️ /insta (nombre de usuario) – Obtén información acerca de una cuenta de Instagram.\n➡️ /gif (Respondiendo a un video) – Convierte un video en gif.\n➡️ /deepai - Una potente Inteligencia Artificial con varias funciones.\n\nPor favor, ten en cuenta que es un proyecto que aún está en desarrollo y puede contener fallas 🚧' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.ALIVEMSG + '\n*Powered by Skueletor*', MessageType.text);
        }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {
        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
