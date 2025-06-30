console.log("🟢 الكود بدأ تنفيذه داخل sandbox");

// نستخدم المتغير playerId والدالة sendMessageToPlayer من البيئة المضيفة
console.log("معرّف اللاعب:", playerId);

sendMessageToPlayer(playerId, "مرحباً بك في السيرفر! 👋");

// مثال بسيط لتعديل متغير (يمكنك توسيعه حسب حاجتك)
const serverData = { score: 10 };
serverData.score += 5;

console.log("النقاط الجديدة للاعب:", serverData.score);
