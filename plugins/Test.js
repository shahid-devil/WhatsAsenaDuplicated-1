const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

// Languages
const END = "Ese es un complemento con herramientas agradables juntas en su interior. (Paquete de emojis V1)"

        Asena.addCommand({pattern: 'asdasdasd', fromMe: true, desc: END}, (async (message, match) => {

            await message.sendMessage("_Ese es un complemento con herramientas agradables juntas en su interior._\n💻Uso: */cumple*\nℹ️Descripción: *Celebra un cumpleaños.*\n\n💻Uso: */guerra*\nℹ️Descripción: *¿Qué tal un pequeño trago, amigo?*\n\n💻Uso: */amor*\nℹ️Descripción: *Una forma diferente de decir te amo*\n\n💻Uso: */helicoptero*\nℹ️Descripción: *¿Qué tal aterrizar en un helicóptero y saludar?*\n\n💻Uso: */corazon*\nℹ️Descripción: *Envíale un corazón a alguien.*\n\n💻Uso: */tanque*\nℹ️Descripción: *¿Qué tal enviar un tanque?*\n\n💻Uso: */luna*\nℹ️Descripción: *Para aquellos que arden con el amor de la luna*\n\n💻Uso: */gato*\nℹ️Descripción: *¿Qué tal enviar un gato para animar la charla?*\n\nCodded by *@DKzippO*\nVersión: *1.0*");

        }));

        Asena.addCommand({pattern: 'testbutton', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage("test") [test](buttonurl:www.youtube.com);

        }));
