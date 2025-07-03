
module.exports = {
  name: "menu",
  execute: async (m, sock) => {
    const menu = `
🌸 *Atomicend2 Bot Menu*

🎮 Games
.tic - Tic Tac Toe
.quiz - Trivia
.math - Math Game
.rps - Rock Paper Scissors

🧠 Tools
.ai - Ask AI
.ss - Screenshot
.ytmp3 - YouTube MP3
.toimg - Sticker to Image

🛡️ Admin
.kick - Kick Member
.ban - Ban User
.vv - View Once Bypass

Use ".command" to test features.
`;
    await sock.sendMessage(m.chat, { text: menu }, { quoted: m });
  }
};
