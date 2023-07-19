const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const token = '6190647327:AAFxS6-pwJldMaOtWmptqoFK9j5ABJd8KEs';

// Create a new instance of the TelegramBot
const bot = new TelegramBot(token);

// Create an Express app
const app = express();

// Set up the middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Handle incoming Telegram webhook requests
app.post('/webhook', (req, res) => {
  // Process the incoming update from Telegram
  bot.processUpdate(req.body);

  // Send a response to acknowledge receipt of the update
  res.sendStatus(200);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
