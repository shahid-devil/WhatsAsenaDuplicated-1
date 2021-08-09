/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const axios = require('axios')
const Config = require('../config');

const Language = require('../language')
const { errorMessage, infoMessage } = require('../helpers')
const Lang = Language.getString('instagram')
const Tlang = Language.getString('tiktok')
const Ierr = "¡No encontré ningún Tiktok! :("
const Wath = "¡Necesito que ingreses un enlace!"
const Ivd = "¡Descargando y enviando el video!"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'insta ?(.*)', fromMe: true, desc: Lang.DESC}, async (message, match) => {

        const userName = match[1]
        if (userName === '') return await message.sendMessage(errorMessage(Lang.need))

        await message.sendMessage(infoMessage(Lang.loading))

        await axios.get(`https://docs-jojo.herokuapp.com/api/stalk?username=${userName}`).then(async (response) => {
            const { username, name, followers, following, profile_pic } = response.data
            const instascrap = await axios.get(profile_pic, { responseType: 'arraybuffer' })
            const msg = `*Nombre:* ${name}\n*Usuario:* ${username}\n*Seguidores:* ${followers}\n*Siguiendo:* ${following}`
            await message.sendMessage(Buffer.from(instascrap.data), MessageType.image, { caption: 'Hecho por *Skueletor*' })
        }).catch(async (err) => {
            await message.sendMessage(errorMessage(Lang.iErr))
        })
    });

    }));

	Asena.addCommand({ pattern: 'tiktok ?(.*)', fromMe: true}, async (message, match) => {

        const userName = match[1]

        if (userName === '') return await message.sendMessage(errorMessage(Wath))

        await message.sendMessage(infoMessage(Ivd))

        await axios.get(`https://api.xteam.xyz/dl/tiktok?url=${userName}?lang=id-ID&is_copy_url=1&is_from_webapp=v1&APIKEY=23da2e1fb81e0053`).then(async (response) => {

            const {server_1 } = response.data

            const tktkscrap = await axios.get(server_1, { responseType: 'arraybuffer' })

            await message.sendMessage(Buffer.from(tktkscrap.data), MessageType.video, { caption: 'Hecho por *Skueletor*' })

        }).catch(async (err) => {
            await message.sendMessage(errorMessage(Ierr))
        })
    });
 }

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'insta ?(.*)', fromMe: false, desc: Lang.DESC }, (async (message, match) => {
        if (match[0].includes('install')) return;
        if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text, { quoted: message.data });
        if (!match[1].includes('www.instagram.com')) return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text, { quoted: message.data });
	
        let urls = `https://api.xteam.xyz/dl/ig?url=${match[1]}&APIKEY=23da2e1fb81e0053`
        let response
        try { response = await got(urls) } catch { return await message.client.sendMessage(message.jid, Lang.FİX, MessageType.text, { quoted: message.data });
        }
        const json = JSON.parse(response.body);

        if (json.status === false) return await message.client.sendMessage(message.jid, Lang.NOT_FOUND, MessageType.text, { quoted: message.data });
        if (json.code === 403) return await message.client.sendMessage(message.jid, '```API Error!```', MessageType.text, { quoted: message.data });

        await message.client.sendMessage(message.jid, Tlang.DOWN, MessageType.text, { quoted: message.data });

        let url = json.result.data[0].data;
        let name = json.result.data[0].type;
        await axios({ method: "get", url, headers: { 'DNT': 1, 'Upgrade-Insecure-Request': 1 }, responseType: 'arraybuffer'}).then(async (res) => {
            if (name === 'video') { return await message.sendMessage(Buffer(res.data), MessageType.video, { caption: '*' + Tlang.USERNAME + '* ' + json.result.username + '\n*' + Tlang.LİNK + '* ' + 'http://instagram.com/' + json.result.username + '\n*' + Tlang.CAPTİON + '* ' + json.result.caption }) } else { return await message.sendMessage(Buffer(res.data), MessageType.image, { caption: '*' + Tlang.USERNAME + '* ' + json.result.username + '\n*' + Tlang.LİNK + '* ' + 'http://instagram.com/' + json.result.username + '\n*' + Tlang.CAPTİON + '* ' + json.result.caption });
            }
        });

    }));
    Asena.addCommand({ pattern: 'insta ?(.*)', fromMe: false, desc: Lang.DESC}, async (message, match) => {

        const userName = match[1]
        if (userName === '') return await message.sendMessage(errorMessage(Lang.need))

        await message.sendMessage(infoMessage(Lang.loading))

        await axios.get(`https://docs-jojo.herokuapp.com/api/stalk?username=${userName}`).then(async (response) => {
            const { username, name, followers, following, profile_pic } = response.data
            const instascrap = await axios.get(profile_pic, { responseType: 'arraybuffer' })
            const msg = `*Nombre:* ${name}\n*Usuario:* ${username}\n*Seguidores:* ${followers}\n*Siguiendo:* ${following}`
            await message.sendMessage(Buffer.from(instascrap.data), MessageType.image, { caption: 'Hecho por *Skueletor*' })
        }).catch(async (err) => {
            await message.sendMessage(errorMessage(Lang.iErr))
        })
    });

    }));
	Asena.addCommand({ pattern: 'tiktok ?(.*)', fromMe: false}, async (message, match) => {

        const userName = match[1]

        if (userName === '') return await message.sendMessage(errorMessage(Wath))

        await message.sendMessage(infoMessage(Ivd))

        await axios.get(`https://api.xteam.xyz/dl/tiktok?url=${userName}?lang=id-ID&is_copy_url=1&is_from_webapp=v1&APIKEY=23da2e1fb81e0053`).then(async (response) => {

            const {server_1 } = response.data

            const tktkscrap = await axios.get(server_1, { responseType: 'arraybuffer' })

            await message.sendMessage(Buffer.from(tktkscrap.data), MessageType.video, { caption: 'Hecho por *Skueletor*' })

        }).catch(async (err) => {
            await message.sendMessage(errorMessage(Ierr))
        })
    });
}
