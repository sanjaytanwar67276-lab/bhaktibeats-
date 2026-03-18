// 1. आवाज़ (Voice) फंक्शन - इसमें 'Error Handling' जोड़ी गई है
function speak(text) {
    // अगर ब्राउज़र में आवाज़ सपोर्ट नहीं है, तो एरर न आए
    if (!window.speechSynthesis) {
        console.log("आपका ब्राउज़र आवाज़ सपोर्ट नहीं करता।");
        return;
    }

    // पहले से चल रही आवाज़ को रोकना ज़रूरी है
    window.speechSynthesis.cancel();

    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(text);
    
    utterThis.lang = 'hi-IN'; // शुद्ध हिंदी
    utterThis.rate = 1.0;     // सामान्य गति
    utterThis.pitch = 1.0;    // सामान्य आवाज़

    synth.speak(utterThis);
}

// 2. YouTube चैनल लिंक (अपना ID ज़रूर बदलें)
function openYouTube() {
    // @YourChannelID की जगह अपने चैनल का नाम या ID डालें
    const channelUrl = "https://www.youtube.com/@BhaktiSagar"; 
    window.open(channelUrl, '_blank');
}

// 3. व्हाट्सएप शेयर फंक्शन
function shareApp() {
    const appUrl = window.location.href; // यह अपने आप आपका Netlify लिंक ले लेगा
    const message = "🚩 *श्री भक्ति सागर* 🚩\n\nसभी देवी-देवताओं की पूजा विधि और व्रत कथा के लिए इस ऐप को देखें:\n" + appUrl;
    
    // मोबाइल के लिए व्हाट्सएप लिंक
    window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(message));
}
