import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  // let img = imagen1
  let img = fs.readFileSync('./media/Welcome.js')
  // let img2 = imagen2
  let img2 = fs.readFileSync('./media/Bye.js')
  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
    let welcome = `┌─★ *Luffy Bot - MD* \n│「 Bienvenido 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  Bienvenido a\n   │✑  ${groupMetadata.subject}\n   └───────────────┈ ⳹`

await conn.sendLuffy(m.chat, packname, textbot, welcome, img, img, redes)
  }

  if (chat.welcome && m.messageStubType == 28) {
    let bye = `┌─★ *Luffy Bot - MD* \n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  Se fue\n   │✑ Jamás te quisimos aquí\n   └───────────────┈ ⳹`
await conn.sendLuffy(m.chat, packname, textbot, bye, img2, img2, redes)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = `┌─★ *Luffy Bot -MD* \n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  Se fue\n   │✑ Jamás te quisimos aquí\n   └───────────────┈ ⳹`
await conn.sendLuffy(m.chat, packname, textbot, kick, img2, img2, redes)
}}
