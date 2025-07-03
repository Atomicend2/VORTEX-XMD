
module.exports = {
  name: "tools",
  execute: async (m, sock) => {
    const tools = "🛠️ Tool Commands:
.ai - Ask AI
.ss - Screenshot
.ytmp3 - YouTube MP3
.toimg - Sticker to Image
.readmore - Collapse text";
    sock.sendMessage(m.chat, { text: tools }, { quoted: m });
  }
};
