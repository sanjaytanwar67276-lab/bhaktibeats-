// 1. आवाज़ (Speech) के लिए मुख्य फंक्शन
function speak(text) {
    // अगर ब्राउज़र में पहले से कुछ बोल रहा है, तो उसे रोकें
    window.speechSynthesis.cancel();

    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(text);
    
    utterThis.lang = 'hi-IN'; // हिंदी भाषा (India)
    utterThis.rate = 1.0;     // आवाज़ की गति (Speed)
    utterThis.pitch = 1.0;    // आवाज़ का भारीपन
    
    synth.speak(utterThis);
}

// 2. YouTube चैनल खोलने के लिए फंक्शन
function openYouTube() {
    // यहाँ अपने चैनल का असली लिंक डालें
    const youtubeUrl = "https://www.youtube.com/@YourChannelID"; 
    window.open(youtubeUrl, '_blank');
}

// 3. व्हाट्सएप पर ऐप शेयर करने के लिए
function shareApp() {
    const appUrl = "https://bhaktisagr.netlify.app";
    const message = "🚩 *श्री भक्ति सागर* 🚩\nसभी देवी-देवताओं की पूजा विधि और व्रत कथा के लिए इस ऐप को देखें:\n" + appUrl;
    window.open("whatsapp://send?text=" + encodeURIComponent(message));
}

// पेज लोड होने पर कंसोल में मैसेज (चेक करने के लिए)
console.log("Bhakti Sagar Script Loaded Successfully!");
