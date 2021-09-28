/*
By Skueletor
*/

const Skueletor = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const { errorMessage, infoMessage } = require('../helpers');
const Language = require('../language');
const PHONEDE_DESC = "Muestra una lista de detalles del teléfono que proporcionó."
const NEED_WORDC = "*Por favor ingrese el nombre de algún modelo de celular para buscar*"
const USAGE = "Para utilizar este comando escribe /phonedetails y el modelo de algún celular"
const LOADING = "Buscando detalles..."
const PHN_NAME = "Nombre del teléfono:"
const PHN_RDATE = "Fecha de lanzamiento:"
const PHN_SIZE = "Tamaño:"
const PHN_ANDRO = "Tipo de Android:"
const PHN_STOR = "Almacentamiento:"
const PHN_DISP = "Pantalla:"
const PHN_INCH = "Tamaño en pulgadas:"
const PHN_PIX = "Píxeles (cámara):"
const PHN_VPIX = "Píxeles de video:"
const PHN_RAM = "Tamaño de la RAM:"
const PHN_BAT = "Batería:"
const PHN_BTT = "Tipo de batería:"
const PHN_DETAIL = "detalles:"
const NOT_FOUND = "*😔 Celular no encontrado:*"



if (Config.WORKTYPE == 'private') {

cobra.addCommand({ pattern: 'phonedetails ?(.*)', fromMe: true, usage: USAGE, desc: PHONEDE_DESC }, async (message, match) => {

    const pname = match[1]

    if (!pname) return await message.sendMessage(errorMessage(NEED_WORDC))

    await message.sendMessage(infoMessage(LOADING))

    await axios
      .get(`https://zenzapi.xyz/api/gsmarena?query=${pname}&apikey=e75b25d89d`)
      .then(async (response) => {
        const {
              judul,
              rilis,
              thumb,
              ukuran,
              type, 
              storage, 
              display,
              inchi,
              pixel,
              videoPixel,
              ram,
              batrai,
              merek_batre,
              detail,
        } = response.data.result

        const profileBuffer = await axios.get(thumb, {responseType: 'arraybuffer'})

        const msg = `
        *${PHN_NAME}* ${judul} 
        *${PHN_RDATE}* ${rilis} 
        *${PHN_SIZE}* ${ukuran} 
        *${PHN_ANDRO}* ${type} 
        *${PHN_STOR}* ${storage} 
        *${PHN_DISP}* ${display} 
        *${PHN_INCH}* ${inchi} 
        *${PHN_PIX}* ${pixel} 
        *${PHN_VPIX}* ${videoPixel} 
        *${PHN_RAM}* ${ram} 
        *${PHN_BAT}* ${batrai} 
        *${PHN_BTT}* ${merek_batre} 
        *${PHN_DETAIL}* ${detail}
        By *Skueletor*`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(NOT_FOUND + pname)),
      )
  },

 )
}

if (Config.WORKTYPE == 'public') {

cobra.addCommand({ pattern: 'phonedetails ?(.*)', fromMe: false, usage: USAGE, desc: PHONEDE_DESC }, async (message, match) => {

    const pname = match[1]

    if (!pname) return await message.sendMessage(errorMessage(NEED_WORDC))

    await message.sendMessage(infoMessage(LOADING))

    await axios
      .get(`https://zenzapi.xyz/api/gsmarena?query=${pname}&apikey=e75b25d89d`)
      .then(async (response) => {
        const {
              judul,
              rilis,
              thumb,
              ukuran,
              type, 
              storage, 
              display,
              inchi,
              pixel,
              videoPixel,
              ram,
              chipset,
              batrai,
              merek_batre,
              detail,
        } = response.data.result

        const profileBuffer = await axios.get(thumb, {responseType: 'arraybuffer'})

        const msg = `
        *${PHN_NAME}* ${judul} 
        *${PHN_RDATE}* ${rilis} 
        *${PHN_SIZE}* ${ukuran} 
        *${PHN_ANDRO}* ${type} 
        *${PHN_STOR}* ${storage} 
        *${PHN_DISP}* ${display} 
        *${PHN_INCH}* ${inchi} 
        *${PHN_PIX}* ${pixel} 
        *${PHN_VPIX}* ${videoPixel} 
        *${PHN_RAM}* ${ram} 
        *${PHN_CHIP}* ${chipset} 
        *${PHN_BAT}* ${batrai} 
        *${PHN_BTT}* ${merek_batre} 
        *${PHN_DETAIL}* ${detail}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(NOT_FOUND + pname)),
      )
  },

 )
}
