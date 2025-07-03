
module.exports = {
  name: "menu",
  execute: async (m, sock) => {
    const menu = `
╭─━━──〔 🌸 Atomicend2 Bot Menu 〕──━━─╮
│ 👑 Owner: @2347056705430
│ 📅 Date: ${new Date().toLocaleDateString()}
│ ⚔️ Mode: ${m.isGroup ? 'Group' : 'Private'}
│ ⏱️ Uptime: ${process.uptime().toFixed(0)}s
│ 🧩 Prefix: "."
├──────────────⊰🧭⊱──────────────╮
│ 🎮 Games       » .tic .quiz .math
│ 🧠 AI Tools    » .ai .gpt .readmore
│ 🧙 Fun         » .say .joke .meme
│ 🎥 Media       » .ytmp3 .toimg .ss
│ 🛡️ Admin       » .kick .ban .antilink
│ 🧨 ViewOnce    » .vv
╰─────────────────────────────────╯
✨ Use ".command" to try anything!`;
    sock.sendMessage(m.chat, { text: menu }, { quoted: m });
  }
};
