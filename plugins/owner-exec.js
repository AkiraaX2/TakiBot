import cp, { exec as _exec } from 'child_process'
import { promisify } from 'util'
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn, isOwner, command, text }) => {
if (global.conn.user.jid !== conn.user.jid) {
return conn.reply(m.chat, '✦ Comando no disponible para subbots', m )
}
  if (global.conn.user.jid != conn.user.jid) return
  let o
  try {
    o = await exec(command.trimStart()  + ' ' + text.trimEnd())
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim()) m.reply(stdout)
    if (stderr.trim()) m.reply(stderr)
  }
}
handler.customPrefix = /^[$] /
handler.command = new RegExp
handler.rowner = true

export default handler
//xd