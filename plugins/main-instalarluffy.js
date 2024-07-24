var handler  = async (m, { conn }) => {

let texto = `🚩 *Instalación de LuffyBot*

⬡ Dudas: ${creador}
⬡ Tutoríal: *¡Pronto!*

*Comandos de instalación via Termux ✏️*

termux-setup-storage

apt-get update -y && apt-get upgrade -y

pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn

git clone https://github.com/OfcDiego/LuffyBot-MD && cd LuffyBot-MD && yarn install && npm install 

ls

npm start

_Utilice "comandos" para enviarle los comandos uno por uno 🚩_

_Utilice "cafi" para enviarle la instalación por el host *Cafirexos* 🚩_`

conn.reply(m.chat, texto, m, rcanal )

handler.before = async m => {

if (/^comandos$/i.test(m.text) ) {
m.reply('termux-setup-storage')
await delay(1000 * 1)
m.reply('apt-get update -y && apt-get upgrade -y')
await delay(1000 * 1)
m.reply('pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn')
await delay(1000 * 1)
m.reply('git clone https://github.com/OfcDiego/LuffyBot-MD && cd LuffyBot-MD && yarn install && npm install ')
await delay(1000 * 1)
m.reply('ls')
await delay(1000 * 1)
m.reply('npm start')
}

if (/^cafi$/i.test(m.text) ) {
conn.reply(m.chat, '✏️ *Instalación por Cafirexos*\n(nosotros no tenemos tutorial pero eso les puede ayudar)\n\n• Pagina:\nhttps://cafirexos.com\n\n• Área de clientes:\nhttps://clientes.cafirexos.com\n\n• Panel:\nhttps://panel.cafirexos.com', m, rcanal)
await delay(2000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://telegra.ph/file/fdeefe56c9454c09e9db6.jpg'}, caption: ''}, {quoted: fkontak})
await delay(1000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://telegra.ph/file/1c87ab54c2b22dcb555a9.jpg'}, caption: ''}, {quoted: fkontak})
}

}
handler.help = ['instalarluffy', 'cafirexos', 'comandos']
handler.tags = ['main']
handler.command = /^(instalarluffy|instalarbot)/i

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))