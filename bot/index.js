// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === "안녕봇친구") {
    const messages = [
      "안녕하세요 저는 봇입니다.",
      "안녕하지 못합니다.",
      "꼬마갱 화이팅",
      "감기 조심하세요",
      "너무피곤하네요",
    ];
    // messages.length => 5
    await interaction.reply(
      messages[Math.floor(Math.random() * messages.length)]
    );
  } else if (commandName === "server") {
    await interaction.reply("이건 서버 명령어 입니다.");
  }
});

// Login to Discord with your client's token
client.login(token);
