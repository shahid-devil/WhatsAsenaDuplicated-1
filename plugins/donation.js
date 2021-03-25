const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const con = require('../config');

if (con.WORKTYPE == 'public') {
  
Asena.addCommand({pattern: 'donate', fromMe: false}, (async (message, match) => {

    await message.sendMessage('Hola, soy *Skueletor*.');
    await new Promise(r => setTimeout(r, 800));
    await message.sendMessage('¡Me alegra saber que quieres donar!\nSkueletor es un proyecto nuevo que necesita apoyo, te dejo el enlace de PayPal: paypal.me/proyectomenacho por si quieres ayudar con este nuevo proyecto, de antemano, *muchas gracias* ❤️.');
    await new Promise(r => setTimeout(r, 1650));
    await message.sendMessage('Por cierto, muy pronto los donadores tendrán beneficios dentro del bot...\nAsí que si decides apoyar este proyecto, cuando hagas tu donación envíame una captura de pantalla por Telegram, t.me/DKzippO\nCuando me escribas, dime cuál es tu número de teléfono con el que utilizas el bot y te tomaré en cuenta.');
    }));
  
  }

else if (con.WORKTYPE == 'private') {
  
Asena.addCommand({pattern: 'donate', fromMe: true}, (async (message, match) => {

    await message.sendMessage('Hola, soy *Skueletor*.');
    await new Promise(r => setTimeout(r, 800));
    await message.sendMessage('¡Me alegra saber que quieres donar!\nSkueletor es un proyecto nuevo que necesita apoyo, te dejo el enlace de PayPal: paypal.me/proyectomenacho por si quieres ayudar con este nuevo proyecto, de antemano, *muchas gracias* ❤️.');
    await new Promise(r => setTimeout(r, 1650));
    await message.sendMessage('Por cierto, muy pronto los donadores tendrán beneficios dentro del bot...\nAsí que si decides apoyar este proyecto, cuando hagas tu donación envíame una captura de pantalla por Telegram, t.me/DKzippO\nCuando me escribas, dime cuál es tu número de teléfono con el que utilizas el bot y te tomaré en cuenta.');
    }));
  
  }
