let handler = async (m, { conn, command }) => {
await conn.reply(m.chat, global.wait, m, rcanal)
let gps = `*◜💙 GRUPOS OFICIALES 💙◞*

🚩 ${packname} 
${gp1}

🚩 ${packname} 2
${gp2}

 *◜🤍 COLABORACIONES 🤍◞*

🍟 ${colab1}
${gp3}

🍟 ${colab2}
${gp4}

🍟 ${namecomu}
${comunidad1}

🍟 ${namecomu2}
${comunidad2}

 *◜🌸 CANALES OFICIALES 🌸◞*

🍭 ${namechannel}
${channel}

🍭 ${namechannel2}
${channel2}`

m.react(emojis) 

//conn.reply(m.chat, gps, m, rcanal)}
await conn.sendFile(m.chat, imagen1, 'luffy.jpg', gps.trim(), fkontak, null, rcanal)

handler.tags = ['main']
handler.help = ['grupos']
handler.command = /^grupos|gruposluffy|linkre|luffygp|gpluffy|gruposofc|gruposoficiales$/i
handler.register = true

export default handler
