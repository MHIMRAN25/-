module.exports.config = {
    name: "autotime",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "msg",
  prefix: true, 
  category: "user", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};
const nam = [{
    timer: '12:00:00 AM',
    message: ['~ এখন রাত ১১টা বাজে\nখাউয়া দাউয়া করে নেও😙']
},
             {
    timer: '1:00:00 AM',
    message: ['']
},
						{
    timer: '2:00:00 AM',
    message: ['']
},
						 {
    timer: '3:00:00 AM',
    message: ['']
},
						 {
    timer: '4:00:00 AM',
    message: ['']
},
						 {
    timer: '5:43:00 AM',
    message: ['সেহেরির সময় হয়েছে সবাই উঠে যান তাড়াতাড়ি সেহেরি খেয়ে নিন ]
},
						 {
    timer: '6:00:00 AM',
    message: ['']
},
						 {
    timer: '7:00:00 AM',
    message: ['']
},
						 {
    timer: '8:00:00 AM',
    message: ['']
},
						 {
    timer: '9:00:00 AM',
    message: ['']
},
             {
    timer: '10:00:00 AM',
    message: ['' ]
},
						 {
    timer: '11:00:00 AM',
    message: ['']
},
						 {
    timer: '12:00:00 PM',
    message: ['']
},					
						 {
    timer: '1:00:00 PM',
    message: ['']
},
						 {
    timer: '2:45:00 PM',
    message: ['kemon acho sobai...?]
},
						 {
    timer: '3:00:00 PM',
    message: ['']
},
						 {
    timer: '4:10:00 PM',
    message: ['
Dhaka, Dhaka Division, Bangladesh
এখন সময়
14:32:45
আজকের সেহরির শেষ সময়
৪:৪৪ পূর্বাহ্ণ
time out
আজকের ইফতারের সময়
৬:১৩ অপরাহ্ন
0d 3h 40m 15s
আগামীকালের সেহরির সময়
৪:৪৩ পূর্বাহ্ণ
আগামীকালের ইফতারের সময়
৬:১৩ অপরাহ্ন']
},
						{
    timer: '5:00:00 PM',
    message: ['রোজার নিয়ত:
বাংলায় উচ্চারণ: নাওয়াইতু আন আছুমা গদাম মিন শাহরি রমাদ্বানাল মুবারকি ফারদ্বল্লাকা ইয়া আল্লাহু ফাতাক্বব্বাল মিন্নী ইন্নাকা আংতাস সামীউল আলীম।

অর্থ: আয় আল্লাহ পাক! আপনার সন্তুষ্টির জন্য আগামীকালের রমাদ্বান শরীফ-এর ফরয রোযা রাখার নিয়ত করছি। আমার তরফ থেকে আপনি তা কবুল করুন। নিশ্চয়ই আপনি সর্বশ্রোতা , সর্বজ্ঞাত।

মাসআলা: কেউ যদি ছুবহি ছাদিক্বের পূর্বে নিয়ত করতে ভুলে যায় তাহলে তাকে দ্বিপ্রহরের পূর্বে নিয়ত করতে হবে। তখন এভাবে নিয়ত করবে:

বাংলায় উচ্চারণ: নাওয়াইতু আন আছুমাল ইয়াওমা মিন শাহরি রমাদ্বানাল মুবারকি ফারদ্বাল্লাকা ইয়া আল্লাহু ফা তাক্বাব্বাল মিন্নী ইন্নাকা আংতাস সামীউল আলীম।

ইফতারের দোয়া:
বাংলায় উচ্চারণ: (আল্লাহুম্মা সুমতু লাকা, ওয়া তাওআক্কালতু আ‘লা রিঝক্বিকা, ওয়া আফতারতু বিরাহমাতিকা ইয়া আরহামার রহিমীন)

অর্থ: আয় আল্লাহ পাক! আমি আপনারই সন্তুষ্টির জন্য রোযা রেখেছি এবং আপনারই দেয়া রিযিক্ব দ্বারা ইফতার করছি।']
},
						 {
    timer: '6:00:00 PM',
    message: ['']
},
						 {
    timer: '7:00:00 PM',
    message: ['']
},
             {
    timer: '8:00:00 PM',
    message: ['']
},
             {
    timer: '9:00:00 PM',
    message: ['']
},
             {
    timer: '10:00:00 PM',
    message: ['']
},
            {
    timer: '11:00:00 PM',
    message: ['']
}];
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};
