const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const StoreDB = require("axios");
const config = require('../config');
const deda = "Busca en la tienda de complementos."

  Asena.addCommand({pattern: 'skuelstore ?(.*)', fromMe: true, desc: deda }, (async (message, match) => { 

        if (config.LANG == 'TR' || config.LANG == 'AZ') {
            if (match[1] === '') {

                await message.client.sendMessage(
                    message.jid,
                    '_Mağazada En Son Eklenen Pluginler Aranıyor.._',
                    MessageType.text
                );
                await new Promise(r => setTimeout(r, 1800));
           
                const messages = await message.client.loadConversation('905511384572-1616840790@g.us', 3)
                const message = messages[0]
                await message.forwardMessage('905511384572-1616840790@g.us', message)
            }
            else {

                await new Promise(r => setTimeout(r, 1100));

                const messages = await message.client.loadConversation('905511384572-1616840790@g.us', 1)
                const message = messages[0].includes(`${match[1]}`)
                await message.forwardMessage('905511384572-1616840790@g.us', message)

            }
        }
        else {
            if (match[1] === '') {

                await message.client.sendMessage(
                    message.jid,
                    '_Buscando los últimos plugins en la tienda..._',
                    MessageType.text
                );
                await new Promise(r => setTimeout(r, 1800));

                await StoreDB.get('https://gist.githubusercontent.com/Xenon67/ff744e3713004fbaf48fcc97ec24b5cb/raw/2c023a649ac9b4fc7cc88d59ff3e58270578b365/Store.json').then(async (store) => {

                    const { plug1en, plug2en, plug3en } = store.data.result

                    const payload = `\n\n *==============================* \n\n${plug1en} \n\n *==============================* \n\n${plug2en} \n\n *==============================* \n\n${plug3en} \n\n *==============================*`
   
                    await message.client.sendMessage(message.jid,'```Aquí están los últimos complementos cargados en la tienda:```' + payload, MessageType.text);
                });
            }
            else {
                await message.client.sendMessage(
                    message.jid,
                    'Hmm',
                    MessageType.text
                );
            }
        }
    }));
