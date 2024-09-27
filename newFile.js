const { bot } = require(".");

bot.on("message", async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  if (text === "/start") {
    return bot.sendMessage(
      chatId,
      "assalomu aleykum xurmatli ${msg.from.first_name} video yasovchi botga xush kelibsz"
    );
  }

  if (text === "/info") {
    return bot.sendMessage(
      chatId,
      "video yasovchi bot haqida qisqa malumot, bu botga siz o'z ismingizni yozsangiz bu bot sizni ismingizga video tashlab beradi agar tashlab bermasa adminga murodjat qilishingizni so'rab qolamiz. admin esa bot biosida"
    );
  }
});
