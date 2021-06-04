const Asena = require('../events');
const { MessageType, Mimetype} = require("@adiwajshing/baileys");
const axios = require('axios');
const con = require('../config');
const sd = "Descarga videos de Instagram."
const tvig = "Descarga video de IGTV."
const ph = "Descarga fotos de Instagram."
const { errorMessage, infoMessage } = require('../helpers');
const Language = require('../language');
const Lang = Language.getString('instagram');

if (Con.WORKTYPE == 'private') {
        
Asena.addCommand({ pattern: 'igvideo ?(.*)', fromMe: true, desc: sd }, async (message, match) => {

    const userName = match[1]

    if (userName === '') return await message.client.sendMessage(message.jid, '```¡Necesitas intruducir un enlace!```')

    await axios.get(`https://docs-jojo.herokuapp.com/api/insta?url=${userName}`).then(async (response) => {

        const { resource } = response.data

        const profileBuffer = await axios.get(resource.url[0], { responseType: 'arraybuffer' })

        if (resource.url.is_video[0]) {
            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, { caption: 'Hecho por *Skueletor*' })
        }
        else if (!resource.url.is_video[0]) {
            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { caption: 'Hecho por *Skueletor*' })
        }
    }).catch(async (err) => {
        await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName))
    })
});
Asena.addCommand({ pattern: 'igphoto ?(.*)', fromMe: true, desc: ph }, async (message, match) => {

    const userName = match[1]

    if (userName === '') return await message.client.sendMessage(message.jid, '```¡Necesitas intruducir un enlace!```')

    await axios
      .get(`https://api.zeks.xyz/api/ig?url=${userName}&apikey=apivinz`)
      .then(async (response) => {

        const {
          owner,
          caption,
          url, 
        } = response.data.result

        const phig = await axios.get(url, 
          {responseType: 'arraybuffer',
        })

        const msg = `*Nombre de usuario:* ${owner} \n*Descripción:* ${caption}`

        await message.sendMessage(Buffer.from(phig.data), MessageType.image, { 
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.client.sendMessage(message.jid, 'No pude encontrar nada :('),
      )
  },
)

Asena.addCommand({ pattern: 'igtv ?(.*)', fromMe: true, desc: tvig }, async (message, match) => {

    const userName = match[1]

    if (userName === '') return await message.client.sendMessage(message.jid, '```¡Necesitas intruducir un enlace!```')

    await axios
      .get(`https://videfikri.com/api/igtv/?url=${userName}`)
      .then(async (response) => {

        const {
          likes, 
          comment, 
          username,
          full_name, 
          caption,
          video_url, 
          duration,
        } = response.data.result

        const tvdat = await axios.get(video_url, 
          {responseType: 'arraybuffer',
        })

        const msg = `*Nombre de usuario:* ${username} \n*Nombre completo:* ${full_name} \n*Likes:* ${likes} \n*Comentarios:* ${comment} \n*Publicación:* ${caption} \n*Duración:* ${duration}`

        await message.sendMessage(Buffer.from(tvdat.data), MessageType.video, { 
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.client.sendMessage(message.jid, 'No pude encontrar nada :('),
            )
         },
        )
    }
else if (Con.WORKTYPE == 'public') {
    
    Asena.addCommand({ pattern: 'igvideo ?(.*)', fromMe: true, desc: sd }, async (message, match) => {

    const userName = match[1]

    if (userName === '') return await message.client.sendMessage(message.jid, '```¡Necesitas intruducir un enlace!```')

    await axios.get(`https://docs-jojo.herokuapp.com/api/insta?url=${userName}`).then(async (response) => {

        const { resource } = response.data

        const profileBuffer = await axios.get(resource.url[0], { responseType: 'arraybuffer' })

        if (resource.url.is_video[0]) {
            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, { caption: 'Hecho por *Skueletor*' })
        }
        else if (!resource.url.is_video[0]) {
            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { caption: 'Hecho por *Skueletor*' })
        }
    }).catch(async (err) => {
        await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName))
    })
});
Asena.addCommand({ pattern: 'igphoto ?(.*)', fromMe: true, desc: ph }, async (message, match) => {

    const userName = match[1]

    if (userName === '') return await message.client.sendMessage(message.jid, '```¡Necesitas intruducir un enlace!```')

    await axios
      .get(`https://api.zeks.xyz/api/ig?url=${userName}&apikey=apivinz`)
      .then(async (response) => {

        const {
          owner,
          caption,
          url, 
        } = response.data.result

        const phig = await axios.get(url, 
          {responseType: 'arraybuffer',
        })

        const msg = `*Nombre de usuario:* ${owner} \n*Descripción:* ${caption}`

        await message.sendMessage(Buffer.from(phig.data), MessageType.image, { 
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.client.sendMessage(message.jid, 'No pude encontrar nada :('),
      )
  },
)

Asena.addCommand({ pattern: 'igtv ?(.*)', fromMe: true, desc: tvig }, async (message, match) => {

    const userName = match[1]

    if (userName === '') return await message.client.sendMessage(message.jid, '```¡Necesitas intruducir un enlace!```')

    await axios
      .get(`https://videfikri.com/api/igtv/?url=${userName}`)
      .then(async (response) => {

        const {
          likes, 
          comment, 
          username,
          full_name, 
          caption,
          video_url, 
          duration,
        } = response.data.result

        const tvdat = await axios.get(video_url, 
          {responseType: 'arraybuffer',
        })

        const msg = `*Nombre de usuario:* ${username} \n*Nombre completo:* ${full_name} \n*Likes:* ${likes} \n*Comentarios:* ${comment} \n*Publicación:* ${caption} \n*Duración:* ${duration}`

        await message.sendMessage(Buffer.from(tvdat.data), MessageType.video, { 
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.client.sendMessage(message.jid, 'No pude encontrar nada :('),
          )
        },
        )
}
