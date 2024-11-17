/* let txt = '';
txt += `*\`[ TIKTOK DOWNLOAD ]\`*\n\n`;
txt += `> 🤍 *\`» Título :\`* ${title || '❌'}\n`;
txt += `> 🤍 *\`» Autor :\`* ${author || '❌'}\n`;
txt += `> 🤍 *\`» Visitas :\`* ${views || '❌'}\n`;
txt += `> 🤍 *\`» Likes :\`* ${like || '❌'}\n`; 
txt += `> 🤍 *\`» Comentarios :\`* ${comment || '❌'}\n`;
txt += `> 🤍 *\`» Publicado :\`* ${published || '❌'}\n\n`;
txt += '> ©️ ρσωε૨ ɓყ ɠαℓαאყ ƭεαɱ\n'; */

import fetch from 'node-fetch'
import ffmpeg from "fluent-ffmpeg"

var handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) {
        throw m.reply(`*✧ Ejemplo: ${usedPrefix + command
        } https://vm.tiktok.com/ZMhAk8tLx/`);
    }

    try {
        await conn.reply ( m.chat, "✧ Espere un momento, estoy descargando su video...", m, );

        const tiktokData = await tiktokdl(args[0]);

        if (!tiktokData) {
            throw m.reply("Error api!");
        }

        const videoURL = tiktokData.data.play;
        const videoURLWatermark = tiktokData.data.wmplay;
        const txt = `> 🤍 *\`» Título :\`* ${tiktokData.data.title}\n> 🤍 *\`» Autor :\`* ${tiktokData.data.author.nickname || "No info"
            }\n> 🤍 *\`» Visitas :\`* ${tiktokData.data.play_count} \n*✧ Publicado:* ${tiktokData.data.create_time
            }\n\n*✧ Estado:*\n=====================\nLikes = ${tiktokData.data.digg_count
            }\nComentarios = ${tiktokData.data.comment_count}\nCompartidas = ${tiktokData.data.share_count
            }\nVistas = \nDescargas = ${tiktokData.data.download_count
            }\n=====================\n\n(${tiktokData.data.author.unique_id} - https://www.tiktok.com/@${tiktokData.data.author.unique_id
            } )\n*✧ Sonido:* ${tiktokData.data.music
            }\n`;

        if (videoURL || videoURLWatermark) {
            await conn.sendFile( m.chat, videoURL, "tiktok.mp4", "`DESCARGA DE TIKTOK`"+`\n\n${txt}`, m, null, rcanal );

       await conn.sendMessage(m.chat, { audio: { url: videoURL }, mimetype: "audio/mp4", fileName: tiktokData.data.title + '.mp3' }, { quoted: m })
            setTimeout(async () => {
            }, 1500);
        } else {
            throw m.reply("No se pudo descargar.");
        }
    } catch (error1) {
        conn.reply(m.chat, `Error: ${error1}`, m);
    }
};

handler.help = ['tiktok'].map((v) => v + ' <link>')
handler.tags = ['downloader']
handler.command = /^t(t|iktok(d(own(load(er)?)?|l))?|td(own(load(er)?)?|l))$/i

handler.disable = false
handler.register = true
handler.limit = true

export default handler

async function tiktokdl(url) {
    let tikwm = `https://www.tikwm.com/api/?url=${url}?hd=1`
    let response = await (await fetch(tikwm)).json()
    return response
}

async function convertVideoToMp3(videoUrl, outputFileName) {
    return new Promise((resolve, reject) => {
        ffmpeg(videoUrl)
            .toFormat("mp3")
            .on("end", () => resolve())
            .on("error", (err) => reject(err))
            .save(outputFileName);
    });
}