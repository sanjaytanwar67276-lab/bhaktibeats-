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

// WhatsApp शेयर का 100% वर्किंग फंक्शन
function shareApp() {
    // origin की जगह href का उपयोग करें ताकि आपके ऐप का पूरा लिंक शेयर हो
    const appUrl = window.location.href; 
    const message = "🚩 *श्री भक्ति सागर* 🚩\n\nदैनिक पंचांग, पूजा विधि और 40+ व्रत कथा के लिए इस ऐप को अभी देखें:\n" + appUrl;
    
    // api.whatsapp.com की जगह wa.me का इस्तेमाल (मोबाइल और वेब दोनों पर बेहतरीन काम करता है)
    const whatsappUrl = "https://wa.me/?text=" + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
}
