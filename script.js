// आवाज़ (Voice) का सुरक्षित और अपडेटेड फंक्शन
function speak(text) {
    if ('speechSynthesis' in window) {
        // पुरानी आवाज़ रोकें
        window.speechSynthesis.cancel();
        
        const synth = window.speechSynthesis;
        const utterThis = new SpeechSynthesisUtterance(text);
        
        utterThis.lang = 'hi-IN'; // हिंदी भाषा
        utterThis.rate = 0.9;     // आवाज़ को स्पष्ट रखने के लिए स्पीड 0.9 रखें
        utterThis.pitch = 1.0; 

        synth.speak(utterThis);
    } else {
        alert("माफ़ करें, आपका ब्राउज़र या डिवाइस आवाज़ सपोर्ट नहीं करता है।");
    }
}

// YouTube चैनल खोलने का फंक्शन (यह बिल्कुल सही है)
function openYouTube() {
    const channelHandle = "@Kajaltanwer-eo5jo";
    window.open("https://www.youtube.com/" + channelHandle, '_blank');
}

// WhatsApp शेयर का 100% वर्किंग फंक्शन (Android App के लिए)
function shareApp() {
    // आपके ऐप का असली Play Store लिंक 
    const appUrl = "https://play.google.com/store/apps/details?id=com.appcollection.xbhaktisagar_10307";
    
    // जो मैसेज आप भेजना चाहते हैं
    const message = "🚩 *श्री भक्ति सागर* 🚩\n\nदैनिक पंचांग, पूजा विधि और 40+ व्रत कथा के लिए इस ऐप को अभी डाउनलोड करें:\n" + appUrl;
    
    // Android App (WebView) के लिए डायरेक्ट WhatsApp खोलने का कोड
    const whatsappUrl = "whatsapp://send?text=" + encodeURIComponent(message);
    
    // यह सीधा आपके मोबाइल का WhatsApp खोलेगा (बिना किसी %E0%A4 वाले कचरा टेक्स्ट के)
    window.location.href = whatsappUrl;
}
