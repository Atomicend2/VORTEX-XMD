require("dotenv").config();
const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const fs = require("fs");
const P = require("pino");

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("auth");
  const sock = makeWASocket({
    auth: state,
    logger: P({ level: "silent" }),
    printQRInTerminal: true
  });

  sock.ev.on("creds.update", saveCreds);

  // Load all commands
  const cmds = {};
  fs.readdirSync("./commands").forEach(file => {
    if (file.endsWith(".js")) {
      const cmd = require(`./commands/${file}`);
      if (cmd.name && typeof cmd.execute === "function") {
        cmds[cmd.name] = cmd.execute;
      }
    }
  });

  // Message event handler
  sock.ev.on("messages.upsert", async ({ messages }) => {
    const m = messages[0];
    if (!m.message || m.key.fromMe) return;
    const body = m.message.conversation || m.message.extendedTextMessage?.text || "";
    if (!body.startsWith(".")) return;
    const command = body.slice(1).split(" ")[0];
    if (cmds[command]) {
      try {
        await cmds[command](m, sock);
      } catch (e) {
        await sock.sendMessage(m.chat, { text: "❌ Error in command." }, { quoted: m });
        console.error(e);
      }
    }
  });
}

startBot();
  
