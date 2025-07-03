
const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("🌸 Atomicend2 Bot is Running"));
app.listen(process.env.PORT || 3000, () => {
  console.log("✅ Web server running");
});
// Your bot's original index.js logic goes below this line
