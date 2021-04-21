/*
# Copyright (C) 2020 MuhammedKpln.
# edited by Vai838

# WhatsAsena is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# WhatsAsena is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
#

*/

const Asena = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const axios = require('axios')
const cn = require('../config');

const Language = require('../language')
const { errorMessage, infoMessage } = require('../helpers')
const Lang = Language.getString('instagram')
const Tlang = Language.getString('tiktok')

if (cn.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'insta ?(.*)', fromMe: true, desc: Lang.DESC }, async (message, match) => {

        const userName = match[1]

        if (userName === '') return await message.sendMessage(errorMessage(Lang.NEED_WORD))

        await message.sendMessage(infoMessage(Lang.LOADING))

        await axios.get(`https://docs-jojo.herokuapp.com/api/stalk?username=${userName}`).then(async (response) => {

            const {biography, username, edge_follow, edge_followed_by, category_name, is_verified, is_private, edge_owner_to_timeline_media, profile_pic_url_hd, full_name, is_business_account } = response.data.graphql.user

            const profileBuffer = await axios.get(profile_pic_url_hd, { responseType: 'arraybuffer' })

            const msg = `*${Lang.NAME}*: ${full_name} \n*${Lang.USERNAME}*: ${username} \n*${Lang.BIO}*: ${biography} \n*${Lang.FOLLOWERS}*: ${edge_followed_by.count} \n*${Lang.FOLLOWS}*: ${edge_follow.count} \n*${Lang.ACCOUNT}*: ${is_private ? Lang.HIDDEN : Lang.PUBLIC} \n*Tipo de cuenta:* ${is_verified ? vf : novf} \n*¿Cuenta de Negocios?* ${is_business_account ? bs : nobs} \n*Categoría:* ${category_name} \n*Número de publicaciones:* ${edge_owner_to_timeline_media.count}`

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { caption: msg })

        }).catch(async (err) => {
            await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName))
        })
    });

    Asena.addCommand({ pattern: 'tiktok ?(.*)', fromMe: true, desc: Tlang.TİKTOK }, async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid, Tlang.NEED, MessageType.text)

        await message.client.sendMessage(message.jid, Tlang.DOWN, MessageType.text)

        await axios
          .get(`https://shinoa-rest.herokuapp.com/dl/tiktok?link=${userName}`)
          .then(async (response) => {
            const {
              data,
            } = response.data

            const profileBuffer = await axios.get(data.mp4, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
              caption: 'Hecho por *Skueletor*',
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Tlang.NOT + userName, MessageType.text),
          )
      },
    )
}
else if (cn.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'insta ?(.*)', fromMe: false, desc: Lang.DESC }, async (message, match) => {

        const userName = match[1]

        if (userName === '') return await message.sendMessage(errorMessage(Lang.NEED_WORD))

        await message.sendMessage(infoMessage(Lang.LOADING))

        await axios.get(`https://docs-jojo.herokuapp.com/api/stalk?username=${userName}`).then(async (response) => {

            const {biography, username, edge_follow, edge_followed_by, category_name, is_verified, is_private, edge_owner_to_timeline_media, profile_pic_url_hd, full_name, is_business_account } = response.data.graphql.user

            const profileBuffer = await axios.get(profile_pic_url_hd, { responseType: 'arraybuffer' })

            const msg = `*${Lang.NAME}*: ${full_name} \n*${Lang.USERNAME}*: ${username} \n*${Lang.BIO}*: ${biography} \n*${Lang.FOLLOWERS}*: ${edge_followed_by.count} \n*${Lang.FOLLOWS}*: ${edge_follow.count} \n*${Lang.ACCOUNT}*: ${is_private ? Lang.HIDDEN : Lang.PUBLIC} \n*Tipo de cuenta:* ${is_verified ? vf : novf} \n*¿Cuenta de Negocios?* ${is_business_account ? bs : nobs} \n*Categoría:* ${category_name} \n*Número de publicaciones:* ${edge_owner_to_timeline_media.count}`

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { caption: msg })

        }).catch(async (err) => {
            await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName))
        })
    });

    Asena.addCommand({ pattern: 'tiktok ?(.*)', fromMe: false, desc: Tlang.TİKTOK }, async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid, Tlang.NEED, MessageType.text)

        await message.client.sendMessage(message.jid, Tlang.DOWN, MessageType.text)

        await axios
          .get(`https://shinoa-rest.herokuapp.com/dl/tiktok?link=${userName}`)
          .then(async (response) => {
            const {
              data,
            } = response.data

            const profileBuffer = await axios.get(data.mp4, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
              caption: 'Hecho por *Skueletor*',
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Tlang.NOT + userName, MessageType.text),
          )
      },
    )
}
