const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require("@adiwajshing/baileys");
const sendMsg = await conn.sendMessage(id, button, MessageType.listMessage);
const con = require('../config');

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


if (con.WORKTYPE == 'private') {
  
  Asena.addCommand({pattern: 'test', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage('buttonMessage');

        }));
}

else if (con.WORKTYPE == 'public') {
  
  Asena.addCommand({pattern: 'test', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage('buttonMessage');

        }));
}
