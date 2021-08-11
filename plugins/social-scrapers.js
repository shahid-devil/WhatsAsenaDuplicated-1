/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const axios = require('axios')
const Config = require('../config');
const got = require('got');
const fs = require('fs');

const Language = require('../language')
const { errorMessage, infoMessage } = require('../helpers')
const Lang = Language.getString('instagram')
const Tlang = Language.getString('tiktok')
const Ierr = "¡No encontré ningún Tiktok! :("
const Wath = "¡Necesito que ingreses un enlace!"
const NEED_WORD = "Por favor, ingresa el enlace."
const FBDESC = "Descarga videos desde Facebook"
const LOADING = "Descargando el video..."
const NOT_FOUNDFB = "Video no encontrado."

if (Config.WORKTYPE == 'private') {

Asena.addCommand({ pattern: 'insta ?(.*)', fromMe: true}, async (message, match) => {
    const userName = match[1]
    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))
    await message.sendMessage(infoMessage("Descargando el post..."))
    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/igdown?url=${userName}`)
      .then(async (response) => {
        const {
          url,
          type,
        } = response.data.result[0]
        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})
        const msg = `${type}`
	 if (msg === 'image') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: "Hecho por *Skueletor*"
        })}
		 	 
	if (msg === 'video') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: "Hecho por *Skueletor*"
        })}
	
        
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Enlace no válido, ingrese un enlace de Instagram válido")),
      )
  },
)
	
	Asena.addCommand({ pattern: 'fb ?(.*)', fromMe: true, desc: FBDESC }, async (message, match) => {
    const userName = match[1]
    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))
    await message.sendMessage(infoMessage(LOADING))
    await axios
      .get(`https://videfikri.com/api/fbdl/?urlfb=${userName}`)
      .then(async (response) => {
        const {
          url,
          judul,
        } = response.data.result
        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})
        const msg = `*${CAPTION}*: ${judul}`
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: "Hecho por *Skueletor*"
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(NOT_FOUNDFB )),
      )
  },
)

	Asena.addCommand({ pattern: 'tiktok ?(.*)', fromMe: true}, async (message, match) => {

        const userName = match[1]

        if (userName === '') return await message.sendMessage(errorMessage(Wath))

        await message.sendMessage(infoMessage(Ivd))

        await axios.get(`https://api.xteam.xyz/dl/tiktok?url=${userName}?lang=id-ID&is_copy_url=1&is_from_webapp=v1&APIKEY=e67bd1bafe81b611`).then(async (response) => {

            const {server_1 } = response.data

            const tktkscrap = await axios.get(server_1, { responseType: 'arraybuffer' })

            await message.sendMessage(Buffer.from(tktkscrap.data), MessageType.video, { caption: 'Hecho por *Skueletor*' })

        }).catch(async (err) => {
            await message.sendMessage(errorMessage(Ierr))
        })
    });
 }

else if (Config.WORKTYPE == 'public') {

Asena.addCommand({ pattern: 'insta ?(.*)', fromMe: false}, async (message, match) => {
    const userName = match[1]
    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))
    await message.sendMessage(infoMessage("Descargando el post..."))
    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/igdown?url=${userName}`)
      .then(async (response) => {
        const {
          url,
          type,
        } = response.data.result[0]
        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})
        const msg = `${type}`
	 if (msg === 'image') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: "Hecho por *Skueletor*"
        })}
		 	 
	if (msg === 'video') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: "Hecho por *Skueletor*"
        })}
	
        
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Enlace no válido, ingrese un enlace de Instagram válido")),
      )
  },
)
	
	Asena.addCommand({ pattern: 'fb ?(.*)', fromMe: false, desc: FBDESC }, async (message, match) => {
    const userName = match[1]
    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))
    await message.sendMessage(infoMessage(LOADING))
    await axios
      .get(`https://videfikri.com/api/fbdl/?urlfb=${userName}`)
      .then(async (response) => {
        const {
          url,
          judul,
        } = response.data.result
        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})
        const msg = `*${CAPTION}*: ${judul}`
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: "Hecho por *Skueletor*"
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(NOT_FOUNDFB )),
      )
  },
)
		
	Asena.addCommand({ pattern: 'tiktok ?(.*)', fromMe: false}, async (message, match) => {

        const userName = match[1]

        if (userName === '') return await message.sendMessage(errorMessage(Wath))

        await message.sendMessage(infoMessage(Ivd))

        await axios.get(`https://api.xteam.xyz/dl/tiktok?url=${userName}?lang=id-ID&is_copy_url=1&is_from_webapp=v1&APIKEY=e67bd1bafe81b611`).then(async (response) => {

            const {server_1 } = response.data

            const tktkscrap = await axios.get(server_1, { responseType: 'arraybuffer' })

            await message.sendMessage(Buffer.from(tktkscrap.data), MessageType.video, { caption: 'Hecho por *Skueletor*' })

        }).catch(async (err) => {
            await message.sendMessage(errorMessage(Ierr))
        })
    });
}
