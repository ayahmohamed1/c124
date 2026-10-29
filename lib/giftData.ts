// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "Habiby",                                     // اسم مستلم الهدية
  senderName: "your love",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#1d4ed8",                             // اللون الأزرق الغامق المتوافق مع التصميم الجديد
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `Happy birthday to my favorite person💋❤️❤️ I hope your day is as special as you are to me🙈❤️❤️❤️You deserve all the happiness in the world, and I hope this new year brings you lots of love, success, and beautiful memories😘❤️
I just want you to know how much you mean to me and how grateful I am to have you in my life❤️❤️You make my days a little better just by being in them, and I hope I can always be a reason behind your smile, just as you are one of mine❤️I wish you all the beautiful things your heart desires, and I hope you never forget how special you are to me🫣❤️❤️Happy birthday my love💋❤️❤️I love you more than words can say and I hope I get to celebrate many more birthdays with you🙈❤️❤️❤️`,
};

const giftData: Record<string, GiftData> = {
  ahmed: defaultGift,
  aya: defaultGift,
};

export default giftData;