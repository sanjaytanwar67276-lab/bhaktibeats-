// आवाज़ (Speech) के लिए फंक्शन
function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // पुराने को रोकें
        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = 'hi-IN'; // हिंदी
        msg.rate = 1.0; 
        msg.pitch = 1.1;
        window.speechSynthesis.speak(msg);
    }
}

// व्हाट्सएप शेयर फंक्शन
function shareApp() {
    const appUrl = "https://bhaktisagr.netlify.app";
    const text = "जय श्री राम! मैंने यह 'श्री भक्ति सागर' ऐप बनाया है। इसमें आप रोज़ का पंचांग, क्विज़ और भक्ति जानकारी देख सकते हैं। यहाँ देखें: " + appUrl;
    window.open("whatsapp://send?text=" + encodeURIComponent(text));
}

// बटन पर क्लिक करने पर आवाज़ देने के लिए इवेंट (Browser सुरक्षा के लिए)
document.addEventListener('DOMContentLoaded', () => {
    console.log("Bhakti Sagar App is Ready!");
    // आप चाहें तो यहाँ कोई डिफ़ॉल्ट स्वागत मैसेज डाल सकते हैं
});
