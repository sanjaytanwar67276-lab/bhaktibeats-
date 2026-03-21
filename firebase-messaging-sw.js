// Firebase सर्विस वर्कर कोड (मैसेज रिसीव करने के लिए)
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-messaging-compat.js');

// आपकी वही Firebase वाली चाबी (Config)
const firebaseConfig = {
  apiKey: "AIzaSyBMMnSv1lHoMgDeNbNQH_Ck82ydudpRjGM",
  authDomain: "bhaktisagar-b51ea.firebaseapp.com",
  projectId: "bhaktisagar-b51ea",
  storageBucket: "bhaktisagar-b51ea.firebasestorage.app",
  messagingSenderId: "299964128354",
  appId: "1:299964128354:web:699d5d1118b12ad604053b",
  measurementId: "G-C6HE5WXBLZ"
};

// Firebase चालू करें
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// जब ऐप बैकग्राउंड में हो तब मैसेज दिखाने का तरीका
messaging.onBackgroundMessage(function(payload) {
  console.log('बैकग्राउंड में मैसेज मिला: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // अगर आपके पास लोगो है तो उसका नाम यहाँ डाल दें
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
