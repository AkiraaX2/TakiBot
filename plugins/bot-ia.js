import fetch from 'node-fetch';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openaiii = new OpenAIApi(configuration);

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `*✨️ Ingrese su petición*\n*🪼 Ejemplo de uso:* ${usedPrefix + command} Como hacer un avion de papel`, m, rcanal)
await m.react(mensaje)
try {
let { msg } = await Starlights.openAi(text)
await conn.reply(m.chat, msg, m, rcanal)
} catch {
}}
handler.help = ['ia *<petición>*']
handler.tags = ['ai']
handler.command = /^(|ia|chatgpt|gpt)$/i
handler.register = true
export default handler