
module.exports = {
  name: "games",
  execute: async (m, sock) => {
    const games = "🎮 Game Commands:
.tic - Play Tic Tac Toe
.quiz - Answer trivia
.math - Math puzzle
.rps - Rock Paper Scissors";
    sock.sendMessage(m.chat, { text: games }, { quoted: m });
  }
};
