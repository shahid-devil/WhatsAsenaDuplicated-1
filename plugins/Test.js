const {MessageType, MessageOptions, Mimetype} = require("@adiwajshing/baileys");
const id = '51912545279@s.whatsapp.net' // the WhatsApp ID 

const rows = [
 {title: 'Test 1', description: "Hola esta es la prueba de descripción 1", rowId:"rowid1"},
 {title: 'Test 2', description: "Hola esta es la prueba de descripción 2", rowId:"rowid2"}
]

const sections = [{title: "Skueletor", rows: rows}]

const button = {
 buttonText: '¡Toca aquí!',
 description: "Hola, esta es la lista de mensajes.",
 sections: sections,
 listType: 1
}

  Skueletor.addCommand({pattern: 'test', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      await conn.sendMessage(id, buttonMessage, MessageType.listMessage)

        }));
