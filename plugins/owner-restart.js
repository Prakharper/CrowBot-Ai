import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) return m.react('✖️')
    if (conn.user.jid == conn.user.jid) {
    await m.reply('*🧑‍💻 REINICIANDO 𝕯𝐄𝐌Ọ𝐍 𝐁Ọ𝐓*')
    process.send('reset')
  } else return m.react('✖️')
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart','reiniciar'] 

handler.rowner = true

export default handler