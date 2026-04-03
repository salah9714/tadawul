# تداول بصيرة | Tadawul Baseera
## نظام التحليل الذكي للأسهم السعودية - بيانات حية

---

## خطوات النشر على Vercel (5 دقائق)

### الخطوة 1: إنشاء حسابات مجانية

1. **GitHub**: اذهب إلى [github.com](https://github.com) وأنشئ حساب مجاني
2. **Vercel**: اذهب إلى [vercel.com](https://vercel.com) وسجّل بحساب GitHub
3. **Twelve Data**: اذهب إلى [twelvedata.com](https://twelvedata.com) وأنشئ حساب مجاني للحصول على API Key

### الخطوة 2: رفع المشروع على GitHub

```bash
# في مجلد المشروع
git init
git add .
git commit -m "Initial commit - Tadawul Baseera"
git remote add origin https://github.com/YOUR_USERNAME/tadawul-baseera.git
git push -u origin main
```

أو ارفع الملفات يدوياً عبر واجهة GitHub.

### الخطوة 3: النشر على Vercel

1. افتح [vercel.com/new](https://vercel.com/new)
2. اختر مستودع `tadawul-baseera` من GitHub
3. في **Environment Variables** أضف:
   - `TWELVE_DATA_API_KEY` = مفتاحك من Twelve Data
   - `ANTHROPIC_API_KEY` = مفتاح Claude API (اختياري - للذكاء الاصطناعي)
4. اضغط **Deploy**
5. خلال دقيقتين سيكون الموقع جاهزاً!

### الخطوة 4: الاستخدام

- الرابط سيكون: `https://tadawul-baseera.vercel.app`
- الأسعار تتحدث تلقائياً كل 60 ثانية
- ابحث عن أي سهم سعودي بالاسم أو الرمز
- استخدم تحليل AI لأي سهم

---

## الملفات

```
tadawul-baseera/
├── app/
│   ├── layout.js          # التخطيط الرئيسي RTL
│   ├── page.js            # الصفحة الرئيسية
│   ├── globals.css        # التنسيقات
│   └── api/
│       ├── stocks/route.js # API بيانات الأسهم الحية
│       └── ai/route.js     # API الذكاء الاصطناعي
├── package.json
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.js
├── .env.example
└── README.md
```

## التكلفة

| البند | التكلفة |
|---|---|
| Vercel | مجاني |
| Twelve Data (Free) | مجاني (8 طلبات/دقيقة) |
| Twelve Data (Pro) | $29/شهر (610 طلب/دقيقة) |
| Claude API | حسب الاستخدام |

---

تم البناء بواسطة تداول بصيرة | Tadawul Baseera v1.0
