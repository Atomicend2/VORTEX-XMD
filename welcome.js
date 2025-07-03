
module.exports = {
  name: "welcome",
  onGroupParticipantsUpdate: async (event, sock) => {
    for (let participant of event.participants) {
      if (event.action === 'add') {
        await sock.sendMessage(event.id, {
          text: `🌸 𝑊𝑒𝑙𝑐𝑜𝑚𝑒, @${participant.split("@")[0]}!
You've entered *${event.id.split("@")[0]}*
Type .menu to discover your powers.`,
          mentions: [participant]
        });
      }
    }
  }
};
