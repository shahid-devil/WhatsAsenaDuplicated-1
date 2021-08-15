const Asena = require('../events');
import { MessageType, MessageOptions, Mimetype } from '@adiwajshing/baileys'
const sendMsg = await conn.sendMessage(id, button, MessageType.listMessage)

// send a buttons message!
const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
]

const buttonMessage = {
    contentText: "Hola, esto es una prueba",
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 1
}

const sendMsg = await conn.sendMessage(id, buttonMessage, MessageType.buttonsMessage)
