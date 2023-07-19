const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const token = '6190647327:AAFxS6-pwJldMaOtWmptqoFK9j5ABJd8KEs';

// Create a new instance of the TelegramBot
const bot = new TelegramBot(token, { polling: true });

// Listen for the /hi command
bot.onText(/\/hi/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hi!');
});
