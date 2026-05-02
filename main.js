import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQtTg_-W4owJWydSrshsseT1BQR6RKPiE",
  authDomain: "mynotes-mgh.firebaseapp.com",
  databaseURL: "https://mynotes-mgh-default-rtdb.firebaseio.com",
  projectId: "mynotes-mgh",
  storageBucket: "mynotes-mgh.firebasestorage.app",
  messagingSenderId: "422166703812",
  appId: "1:422166703812:web:016a7cda14491d2eafa391",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const messagesRef = ref(database, "messages");
setInterval(() => {
  onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
    const container = document.getElementById("messages-container");
    container.innerHTML = "";

    if (data) {
      Object.values(data).forEach((item) => {
        const messageDiv = document.createElement("div");
        messageDiv.className = "message-box";

        const name = item.name || "مجهول";
        const messageText = item.message || "";
        const time = item.humanReadableTime || "";

        messageDiv.innerHTML = `
              <div class="message-header">
                <span class="sender-name">${name}</span>
                <span class="message-time">${time}</span>
              </div>
              <div class="message-text">${messageText}</div>
            `;

        container.appendChild(messageDiv);
      });
    } else {
      container.innerHTML = '<p class="no-message">لا توجد رسائل حالياً.</p>';
    }
  });
}, 5000);
