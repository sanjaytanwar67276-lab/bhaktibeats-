function speak(text) {
    // अगर पहले से कुछ बोल रहा है तो उसे रोकें
    window.speechSynthesis.cancel();

    if ('speechSynthesis' in window) {
        var msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.lang = 'hi-IN'; // हिंदी भाषा सेट करें
        msg.rate = 0.9;     // आवाज़ की रफ़्तार (नॉर्मल)
        msg.pitch = 1.0;    // आवाज़ का भारीपन

        // ब्राउज़र की परमिशन चेक करने के लिए
        window.speechSynthesis.speak(msg);
    } else {
        alert("क्षमा करें, आपके फोन में आवाज़ की सुविधा उपलब्ध नहीं है।");
    }
}

// यह हिस्सा बहुत ज़रूरी है: मोबाइल पर पहली बार टच करने पर आवाज़ एक्टिवेट करने के लिए
document.body.addEventListener('click', function() {
    // एक खाली आवाज़ चलायें ताकि ब्राउज़र 'Unlock' हो जाए
    var silentMsg = new SpeechSynthesisUtterance("");
    window.speechSynthesis.speak(silentMsg);
}, { once: true });
