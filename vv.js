
module.exports = {
  name: "vv",
  execute: async (m, sock) => {
    if (!m.quoted || !m.quoted.message) return sock.sendMessage(m.chat, { text: "❌ Reply to a view-once message." }, { quoted: m });
    let type = Object.keys(m.quoted.message)[0];
    if (type !== "imageMessage" && type !== "videoMessage") return sock.sendMessage(m.chat, { text: "❌ Not a view-once message." }, { quoted: m });
    let media = await sock.downloadAndSaveMediaMessage(m.quoted);
    sock.sendMessage(m.chat, { [type.replace("Message", "")]: { url: media }, caption: "🌸 View-once unlocked!" }, { quoted: m });
  }
};
