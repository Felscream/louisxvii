import * as Config from "../config.json";
import CommandHandler from "./commandHandler";
import Discord from "discord.js";

const bot = new Discord.Client();

const commandHandler = new CommandHandler(Config.prefix);

bot.on("ready", () => {
  console.log("bot is ready");
});

bot.on("message", (message) => {
  if (message.author.id !== bot.user.id) {
    commandHandler.handleMessage(message);
  }
});

bot.login(Config.token);
