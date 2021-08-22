const Skueletor = require('../events');
const {MessageType, MessageOptions, Mimetype} = require("@adiwajshing/baileys");
const id = '51912545279@s.whatsapp.net' // the WhatsApp ID 

const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
]

const buttonMessage = {
    contentText: "Hola, es el mensaje con botones",
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 1
}

await conn.relayWAMessage(WAMessageProto.ButtonsMessage.fromObject(buttonMessage), {})

  Skueletor.addCommand({pattern: 'test', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    await conn.sendMessage(id, buttonMessage, MessageType.buttonsMessage)

        }));
