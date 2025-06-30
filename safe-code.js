console.log("🟢 الكود بدأ تنفيذه داخل sandbox");

// خاصية: دالة حساب مجموع مصفوفة أرقام
function sumArray(arr) {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((a, b) => a + b, 0);
}

// خاصية: دالة لتحويل نص إلى صيغة uppercase
function shout(text) {
  if (typeof text !== "string") return null;
  return text.toUpperCase();
}

// اختبار الدوال داخل الـ sandbox
console.log("Sum of [1, 2, 3, 4]:", sumArray([1, 2, 3, 4]));
console.log('Shout "hello world":', shout("hello world"));

// خاصية: زمن التنفيذ الحالي
console.log("الوقت الحالي:", new Date().toLocaleString());

// يمكنك تعريف متغيرات وطباعتها
const testVar = "هذه تجربة لمتغير داخل الكود";
console.log(testVar);
