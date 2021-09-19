const {MessageType, MessageOptions, Mimetype} = require("@adiwajshing/baileys");
const Skueletor = require('../events');
const Config = require('../config');
const id = '51912545279@s.whatsapp.net' // el ID del WhatsApp

const buttons = [
    {buttonId: '51912545279@s.whatsapp.net', buttonText: {displayText: 'Button 1'}, type: 1},
    {buttonId: '51912545279@s.whatsapp.net', buttonText: {displayText: 'Button 2'}, type: 1}
  ]
  
  const buttonMessage = {
      contentText: "Hola, esta es una prueba para enviar mensajes con botones",
      footerText: 'Hello World',
      buttons: buttons,
      headerType: 1
  }


  Skueletor.addCommand({pattern: 'test', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    await conn.sendMessage(id, buttonMessage, MessageType.buttonsMessage)

        }));
