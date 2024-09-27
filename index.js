const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");

const token = "7365427290:AAH6HqiHW9-Uih2VxThieMDJNM4vX-HbdL0";
const bot = new TelegramBot(token, { polling: true });

const bootstrap = () => {
  bot.setMyCommands([
    {
      command: "/start",
      description: "Botga start berish",
    },
    {
      command: "/info",
      description: "Bot haqida ma'lumot",
    },
    {
      command: "/video",
      description: "Video yuborish",
    },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/start") {
      return bot.sendMessage(
        chatId,
        `Assalomu aleykum hurmatli ${msg.from.first_name}! Video yasovchi botga xush kelibsiz. ismga va harfga video yasatmoqchi bo'lsangiz /video ni bosing.`
      );
    } else if (text === "/info") {
      return bot.sendMessage(
        chatId,
        `Video yasovchi bot haqida qisqa ma'lumot: Agar siz o'z ismingizni yozsangiz, bot sizga ismingizga mos video tashlab beradi. Agar tashlab bermasa, adminstrator bilan bog'laning.`
      );
    } else if (text === "/video") {
      bot.sendMessage(chatId, `Video uchun ism yoki harf yuboring!`);
      bot.on("message", async (msg) => {
        const text = msg.text.toLowerCase();
        const videoMapping = {
          avazbek: "video/174C29D83E1FB88533718A4754D145A5_video_dashinit.mp4",
          // boshqa ismlar uchun mappinglar qo'shishingiz mumkin
          shahlo: "video/video_2024-08-16_14-07-25.mp4",
          sevinch: "video/video_2024-08-19_13-07-22.mp4",
          anvar: "video/video_2024-08-19_13-07-31.mp4",
          firdavz: "video/firavs.mp4",
          firdavs: "video/firavs.mp4",
          feruza: "video/feruza.mp4",
          shahzoda: "video/shahzoda.mp4",
          shaxzoda: "video/shahzoda.mp4",
          zilola: "video/zilola.mp4",
          shabnam: "video/shabnam.mp4",
          ravshan: "video/ravshan.mp4",
          mehroj: "video/mehroj.mp4",
          chehroza: "video/chehroza.mp4",
          bobur: "video/bobur.mp4",
          shirina: "video/shirina.mp4",
          shahlo: "video/video_2024-08-16_14-07-25.mp4",
          shaxlo: "video/video_2024-08-16_14-07-25.mp4",
          vohidjon: "video/vohidjon.mp4",
          a: "video/a.mp4",
          b: "video/b.mp4",
          c: "video/c.mp4",
          d: "video/d.mp4",
          f: "video/f.mp4",
          g: "video/g.mp4",
          h: "video/h.mp4",
          i: "video/i.mp4",
          j: "video/j.mp4",
          k: "video/k.mp4",
          l: "video/l.mp4",
          m: "video/m1.mp4",
          n: "video/n.mp4",
          o: "video/o.mp4",
          p: "video/p.mp4",
          q: "video/q.mp4",
          r: "video/r.mp4",
          s: "video/s.mp4",
          t: "video/t.mp4",
          u: "video/u.mp4",
          v: "video/v.mp4",
          x: "video/x.mp4",
          y: "video/y.mp4",
          z: "video/z2.mp4",
          sh: "video/sh3.mp4",
          ch: "video/ch.mp4",
        };
        const videoPath = videoMapping[text];
        if (videoPath) {
          try {
            await bot.sendVideo(chatId, videoPath, {
              caption: `${msg.text} ismi uchun video`,
            });
          } catch (err) {
            console.error("Video yuborishda xatolik:", err.message);
          }
        } else {
          await bot.sendMessage(
            chatId,
            `Bu nom uchun video topilmadi. Iltimos, administrator bilan bog'laning👇👇👇`,
            {
              reply_markup: {
                inline_keyboard: [
                  [
                    {
                      text: "Administrator bilan bog'lanish",
                      url: "https://t.me/Uzkarol0015",
                    },
                  ],
                ],
              },
            }
          );
        }
      });
    }
  });
};
bootstrap();
