const Asena = require("../events");
const {MessageType} = require("@adiwajshing/baileys");
const got = require("got");
const cn = require('../config');

if (cn.WORKTYPE == 'public') {
    
    Asena.addCommand({pattern: "covid ?(.*)", fromMe: true}, (async (message, match) => {
    if (match[1] === "") {
        try{
            //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json());
            const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                const resp = JSON.parse(ok.body);
                await message.reply(`🌍 *Resultados mundiales:*\n🌐 *Casos en total:* ${resp.cases}\n☠️ *Muertes en total:* ${resp.deaths}\n⚕️ *Recuperados en total:* ${resp.recovered}`);

            });

        } catch (err) {
            await message.reply(`Error :\n${err.message}`, MessageType.text)
        }

    }
    else if (match[1] === "bo") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Bolivia").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇧🇴 *Datos de Bolivia:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);
            });
        } catch (err) {
            await message.reply(`Bir Hata Oluştu, İşte Hata : \n${err.message}`, MessageType.text)
        }

    }
    else if (match[1] === "usa") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/USA").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇺🇲 *Datas for USA:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
    else if (match[1] === "arg") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Argentina").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇦🇷 *Datos de Argentina:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
    else if (match[1] === "co") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Colombia").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇨🇴 *Datos de Colombia:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
    else if (match[1] === "br") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Brazil").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇧🇷 *Dados do brasil:*\n😷 *Casos no total:* ${resp.cases}\n🏥 *Casos Diários:* ${resp.todayCases}\n⚰️ *Total de mortes:* ${resp.deaths}\n☠️ *Mortes diárias:* ${resp.todayDeaths}\n💊 *Totalmente recuperado:* ${resp.recovered}\n😷 *Casos ativos:* ${resp.active}\n🆘 *Casos Críticos:* ${resp.critical}\n🧪 *Testes totais:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
    else if (match[1] === "cl") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Chile").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇨🇱 *Datos de Chile:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
    else if (match[1] === "cr") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Costa%20Rica").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇨🇷 *Datos de Costa Rica:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
    else if (match[1] === "ec") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Ecuador").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇪🇨 *Datos de Ecuador:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
    else if (match[1] === "sv") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/El%20Salvador").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇸🇻 *Datos de El Salvador:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
    else if (match[1] === "gt") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Guatemala").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇬🇹 *Datos de Guatemala:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
    else if (match[1] === "hn") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Honduras").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇭🇳 *Datos de Honduras:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
    else if (match[1] === "mx") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Mexico").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇲🇽 *Datos de México:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
    else if (match[1] === "ni") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Nicaragua").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇳🇮 *Datos de Nicaragua:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
    else if (match[1] === "pa") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Panama").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇵🇦 *Datos de Panamá:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
    else if (match[1] === "cu") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Cuba").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇨🇺 *Datos de Cuba:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
    else if (match[1] === "py") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Paraguay").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇵🇾 *Datos de Paraguay:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
    else if (match[1] === "pe") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Peru").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇵🇪 *Datos de Perú:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
    else if (match[1] === "do") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Dominican%20Republic").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇩🇴 *Datos de República Dominicana:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
    else if (match[1] === "uy") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Uruguay").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇺🇾 *Datos de Uruguay:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }
    else if (match[1] === "ve") {
        try{
            const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Venezuela").then(async ok  => {
                resp = JSON.parse(ok.body);
                await message.reply(`🇻🇪 *Datos de Venezuela:*\n😷 *Casos en Total:* ${resp.cases}\n🏥 *Casos diarios:* ${resp.todayCases}\n⚰️ *Muertes en total:* ${resp.deaths}\n☠️ *Muertes diarias:* ${resp.todayDeaths}\n💊 *Recuperados en total:* ${resp.recovered}\n😷 *Casos activos:* ${resp.active}\n🆘 *Casos críticos:* ${resp.critical}\n🧪 *Pruebas totales:* ${resp.totalTests}`);

            });

        } catch (err) {
            await message.reply(`Error : \n${err.message}`, MessageType.text)
        }
    }  
}));

Asena.addCommand({pattern: "infocovid", fromMe: true}, (async (message,match) => {
    
    await message.sendMessage("_Datos actualizados de coronavirus._\n💻Uso: */covid*\nℹ️Descripción: Datos de Covid19 en el mundo\n\n💻Uso: */covid arg*\nℹ️Descripción: Datos de Covid19 en Argentina 🇦🇷\n\n💻Uso: */covid bo*\nℹ️Descripción: Datos de Covid19 en Bolivia 🇧🇴\n\n💻Uso: */covid usa*\nℹ️Descripción: Datos de Covid19 en 🇺🇸\n\n💻Uso: */covid br*\nℹ️Descripción: Datos de Covid19 en Brasil 🇧🇷\n\n💻Uso: */covid cl*\nℹ️Descripción: Datos de Covid19 en Chile 🇨🇱\n\n💻Uso: */covid co*\nℹ️Descripción: Datos de Covid19 en Colombia 🇨🇴\n\n💻Uso: */covid cr*\nℹ️Descripción: Datos de Covid19 en Costa Rica 🇨🇷\n\n💻Uso: */covid cu*\nℹ️Descripción: Datos de Covid19 en Cuba 🇨🇺\n\n💻Uso: */covid ec*\nℹ️Descripción: Datos de Covid19 en Ecuador 🇪🇨\n\n💻Uso: */covid sv*\nℹ️Descripción: Datos de Covid19 en El Salvador 🇸🇻\n\n💻Uso: */covid gt*\nℹ️Descripción: Datos de Covid19 en Guatemala 🇬🇹\n\n💻Uso: */covid hn*\nℹ️Descripción: Datos de Covid19 en Honduras 🇭🇳\n\n💻Uso: */covid mx*\nℹ️Descripción: Datos de Covid19 en México 🇲🇽\n\n💻Uso: */covid ni*\nℹ️Descripción: Datos de Covid19 en Nicaragua 🇳🇮\n\n💻Uso: */covid pa*\nℹ️Descripción: Datos de Covid19 en Panamá 🇵🇦\n\n💻Uso: */covid py*\nℹ️Descripción: Datos de Covid19 en Paraguay 🇵🇾\n\n💻Uso: */covid pe*\nℹ️Descripción: Datos de Covid19 en Perú 🇵🇪\n\n💻Uso: */covid do*\nℹ️Descripción: Datos de Covid19 en República Dominicana 🇩🇴\n\n💻Uso: */covid uy*\nℹ️Descripción: Datos de Covid19 en Uruguay 🇺🇾\n\n💻Uso: */covid ve*\nℹ️Descripción: Datos de Covid19 en Venezuela 🇻🇪");

    
    
    }));
}    

