const Asena = require('../events');
const axios = require('axios')
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const con = require('../config');
const fs = require('fs');

  
  if (con.WORKTYPE == 'private') {
  
    Asena.addCommand({pattern: 'donation', fromMe: true}, (async (message, match) => {
      
          var image = await axios.get ('https://telegra.ph/file/470496095696fab0eb394.jpg', {responseType: 'arraybuffer'})
       await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.jpg, caption: `*Hola, soy _Skueletor_*\n\n¡Me alegra saber que quieres donar ☺️!\n_Skueletor_ es un proyecto nuevo que necesita apoyo, Por ahora solamente tenemos PayPal para recibir donaciones: paypal.me/proyectomenacho\n\nDe antemano, *muchas gracias*. ❤️`})
      
        await new Promise(r => setTimeout(r, 1650));
  
        await message.sendMessage('Por cierto... Muy pronto los donadores tendrán beneficios dentro del bot...\nPor ahora, los donadores tendrán acceso a que el bot sea añadido a un grupo, si *deseas y puedes apoyar* este proyecto, envíame una captura de pantalla de tu donación por Telegram, t.me/DKzippO\nCuando me escribas, dime cuál es tu número de teléfono con el que utilizas el bot y te tomaré en cuenta.');
  
        }));
  }
  else if (con.WORKTYPE == 'public') {
  
    Asena.addCommand({pattern: 'donation', fromMe: false}, (async (message, match) => {
      
          var image = await axios.get ('https://telegra.ph/file/470496095696fab0eb394.jpg', {responseType: 'arraybuffer'})
       await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.jpg, caption: `*Hola, soy _Skueletor_*\n\n¡Me alegra saber que quieres donar ☺️!\n_Skueletor_ es un proyecto nuevo que necesita apoyo, Por ahora solamente tenemos PayPal para recibir donaciones: paypal.me/proyectomenacho\n\nDe antemano, *muchas gracias*. ❤️`})
      
        await new Promise(r => setTimeout(r, 1650));
  
        await message.sendMessage('Por cierto... Muy pronto los donadores tendrán beneficios dentro del bot...\nPor ahora, los donadores tendrán acceso a que el bot sea añadido a un grupo, si *deseas y puedes apoyar* este proyecto, envíame una captura de pantalla de tu donación por Telegram, t.me/DKzippO\nCuando me escribas, dime cuál es tu número de teléfono con el que utilizas el bot y te tomaré en cuenta.');
  
        }));
  }
