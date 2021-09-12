const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'staff', fromMe: true, OnlyGroup: true}, (async (message, match) => {

    await message.sendMessage('[🆘🆘🆘]\n\nLa persona que acaba de ingresar al grupo es un *administrador* del bot, por favor no compartas información privada con él ni lo coloques como administrador aunque él te lo pida.\n\n[🆘🆘🆘]');
    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage('Recuerda que este bot es hecho por *Skueletor* >:D');

}));
}
