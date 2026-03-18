// आवाज़ (Voice) का फंक्शन
function speak(text) {
    if ('speechSynthesis' in window) {
        // पुरानी आवाज़ रोकें
        window.speechSynthesis.cancel();
        const synth = window.speechSynthesis;
        const utterThis = new SpeechSynthesisUtterance(text);
        utterThis.lang = 'hi-IN'; // हिंदी भाषा
        utterThis.rate = 1.0; 
        synth.speak(utterThis);
    }
}

// YouTube चैनल खोलने का फंक्शन
function openYouTube() {
    const channelHandle = "@Kajaltanwer-eo5jo";
    window.open("https://www.youtube.com/" + channelHandle, '_blank');
}

// WhatsApp शेयर फंक्शन
function shareApp() {
    const appUrl = window.location.origin;
    const message = "🚩 *श्री भक्ति सागर* 🚩\n\nपूजा विधि और 40+ व्रत कथा के लिए इस ऐप को देखें:\n" + appUrl;
    window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(message));
}
