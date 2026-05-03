import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQtTg_-W4owJWydSrshsseT1BQR6RKPiE",
  authDomain: "mynotes-mgh.firebaseapp.com",
  databaseURL: "https://mynotes-mgh-default-rtdb.firebaseio.com",
  projectId: "mynotes-mgh",
  storageBucket: "mynotes-mgh.firebasestorage.app",
  messagingSenderId: "422166703812",
  appId: "1:422166703812:web:016a7cda14491d2eafa391",
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// عناصر الصفحة
const loginContainer = document.getElementById("login-container");
const appContainer = document.getElementById("app-container");
const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");
const logoutBtn = document.getElementById("logout-btn");
const messagesContainer = document.getElementById("messages-container");

// التحقق من حالة تسجيل الدخول
onAuthStateChanged(auth, (user) => {
  if (user) {
    // إذا كان المستخدم مسجل دخول، اعرض التطبيق
    loginContainer.classList.add("hidden");
    appContainer.classList.remove("hidden");
    loadMessages(); // تحميل البيانات
  } else {
    // إذا لم يكن مسجل دخول، اعرض نموذج الدخول
    loginContainer.classList.remove("hidden");
    appContainer.classList.add("hidden");
  }
});

// معالجة إرسال نموذج تسجيل الدخول
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      errorMessage.textContent = "";
      loginForm.reset();
    })
    .catch((error) => {
      errorMessage.textContent =
        "خطأ: تأكد من البريد الإلكتروني أو كلمة المرور.";
      console.error(error);
    });
});

// تسجيل الخروج
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // تم تسجيل الخروج بنجاح
    })
    .catch((error) => {
      console.error("خطأ أثناء تسجيل الخروج", error);
    });
});

function loadMessages() {
  const messagesRef = ref(database, "messages");

  onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
    messagesContainer.innerHTML = "";

    if (data) {
      Object.values(data).forEach((item) => {
        const messageDiv = document.createElement("div");
        messageDiv.className = "message-box";

        const name = item.name || "مجهول";
        const messageText = item.message || "";
        const time = item.humanReadableTime || "";

        messageDiv.innerHTML = `
          <div class="message-header">
            <span class="sender-name"><b>${name}</b></span>
            <span class="message-time">${time}</span>
          </div>
          <div class="message-text">${messageText}</div>
        `;

        messagesContainer.appendChild(messageDiv);
      });
    } else {
      messagesContainer.innerHTML =
        '<p class="no-message">لا توجد رسائل حالياً.</p>';
    }
  });
}
