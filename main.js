const _0x1274e5 = _0x46f7,
  _0x50e279 = _0x1889;
function _0x46f7(_0x1e8e76, _0x4cc8ea) {
  _0x1e8e76 = _0x1e8e76 - 0xc9;
  const _0x704b72 = _0x704b();
  let _0x46f79 = _0x704b72[_0x1e8e76];
  return _0x46f79;
}
(function (_0x4fbf91, _0x56e3a9) {
  const _0x23935d = _0x1889,
    _0x3042af = _0x46f7,
    _0x21d903 = _0x4fbf91();
  while (!![]) {
    try {
      const _0x44197e =
        -parseInt(_0x3042af(0xe9)) / 0x1 +
        (parseInt(_0x23935d(0xe4)) / 0x2) * (-parseInt(_0x3042af(0xd8)) / 0x3) +
        (parseInt(_0x3042af(0xd6)) / 0x4) * (parseInt(_0x23935d(0xfe)) / 0x5) +
        (-parseInt(_0x3042af(0x101)) / 0x6) *
          (parseInt(_0x3042af(0xc9)) / 0x7) +
        parseInt(_0x3042af(0xdc)) / 0x8 +
        parseInt(_0x23935d(0xce)) / 0x9 +
        -parseInt(_0x23935d(0xf8)) / 0xa;
      if (_0x44197e === _0x56e3a9) break;
      else _0x21d903["push"](_0x21d903["shift"]());
    } catch (_0x159ee9) {
      _0x21d903["push"](_0x21d903["shift"]());
    }
  }
})(_0x704b, 0xab4f8);
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
    apiKey: _0x50e279(0xdf),
    authDomain: _0x50e279(0xfd),
    databaseURL: _0x50e279(0xcf),
    projectId: _0x1274e5(0xec),
    storageBucket: _0x1274e5(0xe5),
    messagingSenderId: _0x1274e5(0xd4),
    appId: "1:422166703812:web:016a7cda14491d2eafa391",
  },
  app = initializeApp(firebaseConfig),
  database = getDatabase(app),
  auth = getAuth(app),
  loginContainer = document["getElementById"]("login-container"),
  appContainer = document[_0x1274e5(0xd1)](_0x1274e5(0xd2)),
  loginForm = document[_0x1274e5(0xd1)]("login-form"),
  errorMessage = document[_0x1274e5(0xd1)](_0x1274e5(0xf7)),
  logoutBtn = document[_0x50e279(0x103)]("logout-btn"),
  messagesContainer = document[_0x1274e5(0xd1)](_0x50e279(0xe2));
function _0x1889(_0x1e8e76, _0x4cc8ea) {
  _0x1e8e76 = _0x1e8e76 - 0xc9;
  const _0x704b72 = _0x704b();
  let _0x46f79 = _0x704b72[_0x1e8e76];
  if (_0x1889["nVanOu"] === undefined) {
    var _0x26b7ea = function (_0xb9b258) {
      const _0x51cdf4 =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let _0x18895c = "",
        _0x43c0ac = "";
      for (
        let _0x380cab = 0x0, _0x312793, _0x5b2790, _0x5ef107 = 0x0;
        (_0x5b2790 = _0xb9b258["charAt"](_0x5ef107++));
        ~_0x5b2790 &&
        ((_0x312793 =
          _0x380cab % 0x4 ? _0x312793 * 0x40 + _0x5b2790 : _0x5b2790),
        _0x380cab++ % 0x4)
          ? (_0x18895c += String["fromCharCode"](
              0xff & (_0x312793 >> ((-0x2 * _0x380cab) & 0x6)),
            ))
          : 0x0
      ) {
        _0x5b2790 = _0x51cdf4["indexOf"](_0x5b2790);
      }
      for (
        let _0x53d243 = 0x0, _0x210e7e = _0x18895c["length"];
        _0x53d243 < _0x210e7e;
        _0x53d243++
      ) {
        _0x43c0ac +=
          "%" +
          ("00" + _0x18895c["charCodeAt"](_0x53d243)["toString"](0x10))[
            "slice"
          ](-0x2);
      }
      return decodeURIComponent(_0x43c0ac);
    };
    ((_0x1889["BrXhox"] = _0x26b7ea),
      (_0x1889["nkLKEr"] = {}),
      (_0x1889["nVanOu"] = !![]));
  }
  const _0x493549 = _0x704b72[0x0],
    _0x2cea0e = _0x1e8e76 + _0x493549,
    _0x19e682 = _0x1889["nkLKEr"][_0x2cea0e];
  return (
    !_0x19e682
      ? ((_0x46f79 = _0x1889["BrXhox"](_0x46f79)),
        (_0x1889["nkLKEr"][_0x2cea0e] = _0x46f79))
      : (_0x46f79 = _0x19e682),
    _0x46f79
  );
}
(onAuthStateChanged(auth, (_0x210e7e) => {
  const _0x21ba8b = _0x50e279,
    _0x35925a = _0x1274e5;
  _0x210e7e
    ? (loginContainer[_0x35925a(0xdb)]["add"](_0x35925a(0xda)),
      appContainer[_0x35925a(0xdb)][_0x35925a(0xe8)]("hidden"),
      loadMessages())
    : (loginContainer[_0x21ba8b(0xcb)][_0x35925a(0xe8)](_0x35925a(0xda)),
      appContainer[_0x35925a(0xdb)]["add"](_0x35925a(0xda)));
}),
  loginForm[_0x50e279(0xca)](_0x50e279(0xeb), (_0x4441ea) => {
    const _0x3e2476 = _0x1274e5,
      _0x1e62e7 = _0x50e279;
    _0x4441ea[_0x1e62e7(0xf2)]();
    const _0x2778fd = document["getElementById"](_0x1e62e7(0x102))[
        _0x3e2476(0xdd)
      ],
      _0x429177 = document[_0x3e2476(0xd1)](_0x1e62e7(0xfc))["value"];
    signInWithEmailAndPassword(auth, _0x2778fd, _0x429177)
      [_0x1e62e7(0xff)](() => {
        ((errorMessage["textContent"] = ""), loginForm["reset"]());
      })
      [_0x3e2476(0xf5)]((_0x549034) => {
        const _0x177459 = _0x1e62e7;
        ((errorMessage["textContent"] =
          "خطأ:\x20تأكد\x20من\x20البريد\x20الإلكتروني\x20أو\x20كلمة\x20المرور."),
          console[_0x177459(0xef)](_0x549034));
      });
  }),
  logoutBtn[_0x1274e5(0xf4)](_0x50e279(0xf0), () => {
    const _0x3b0ce3 = _0x1274e5,
      _0x25c4f0 = _0x50e279;
    signOut(auth)
      [_0x25c4f0(0xff)](() => {})
      [_0x3b0ce3(0xf5)]((_0x249b6b) => {
        const _0xba63df = _0x3b0ce3;
        console["error"](_0xba63df(0xfa), _0x249b6b);
      });
  }));
function _0x704b() {
  const _0xecadcd = [
    "remove",
    "201501vPstNl",
    "مجهول",
    "C3vIBwL0",
    "mynotes-mgh",
    "name",
    "55855kcMJkO",
    "zxjYB3i",
    "y2XPy2S",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22sender-name\x22><b>",
    "ChjLDMvUDerLzMf1Bhq",
    "mtKWmZuXEur1CKzy",
    "addEventListener",
    "catch",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "error-message",
    "mtq1nJu2ndbsyNj2s0W",
    "y3jLyxrLrwXLBwvUDa",
    "خطأ\x20أثناء\x20تسجيل\x20الخروج",
    "message",
    "CgfZC3DVCMq",
    "BxLUB3rLCY1Tz2GUzMLYzwjHC2vHChaUy29T",
    "ntu4ntvRy01kA08",
    "DgHLBG",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-text\x22>",
    "138JQNoiw",
    "zw1HAwW",
    "z2v0rwXLBwvUDej5swq",
    "190351yDurFX",
    "ywrKrxzLBNrmAxn0zw5LCG",
    "y2XHC3nmAxn0",
    "1598VaVPqz",
    "innerHTML",
    "ntG0nJG3n0zdCLH5qq",
    "Ahr0Chm6lY9TEw5VDgvZlw1NAc1KzwzHDwX0lxj0zgiUzMLYzwjHC2vPBY5JB20",
    "phaGy2XHC3m9iM5Vlw1LC3nHz2uIpTMe2kCG2kRzInIS2k8G2lhyS9IN2kBzHcdyRDIN2ytzITIN2ySUpc9WpG",
    "getElementById",
    "app-container",
    "nda0r2HSwwLj",
    "422166703812",
    "humanReadableTime",
    "404GhlYiI",
    "y2XHC3noyw1L",
    "573Ywbcnr",
    "DMfSDwvZ",
    "hidden",
    "classList",
    "10879016BUSLgz",
    "value",
    "zgL2",
    "quL6yvn5qvf0vgDFlvC0B3Dkv3LKu3jZAhnZzvqXqLfsnLjlugLf",
    "</b></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22message-time\x22>",
    "val",
    "BwvZC2fNzxmTy29UDgfPBMvY",
    "messages",
    "mtu5ofzHvLbXEG",
    "mynotes-mgh.firebasestorage.app",
    "message-box",
    "mJaXntaXDLbZDe5S",
  ];
  _0x704b = function () {
    return _0xecadcd;
  };
  return _0x704b();
}
function loadMessages() {
  const _0xb10e52 = _0x1274e5,
    _0x3cae06 = ref(database, _0xb10e52(0xe3));
  onValue(_0x3cae06, (_0x2cb769) => {
    const _0x151568 = _0x1889,
      _0xfe6f9 = _0xb10e52,
      _0x4918ec = _0x2cb769[_0xfe6f9(0xe1)]();
    ((messagesContainer[_0xfe6f9(0xcd)] = ""),
      _0x4918ec
        ? Object[_0x151568(0xd9)](_0x4918ec)["forEach"]((_0x1b16c5) => {
            const _0x162d48 = _0xfe6f9,
              _0xd5e4 = _0x151568,
              _0x589ade = document[_0xd5e4(0xf9)](_0xd5e4(0xde));
            _0x589ade[_0xd5e4(0xd7)] = _0x162d48(0xe6);
            const _0x3bca30 = _0x1b16c5[_0x162d48(0xed)] || _0x162d48(0xea),
              _0x4c8d13 = _0x1b16c5[_0x162d48(0xfb)] || "",
              _0x50893c = _0x1b16c5[_0x162d48(0xd5)] || "";
            ((_0x589ade["innerHTML"] =
              _0x162d48(0xf1) +
              _0x3bca30 +
              _0x162d48(0xe0) +
              _0x50893c +
              _0x162d48(0x100) +
              _0x4c8d13 +
              _0x162d48(0xf6)),
              messagesContainer["appendChild"](_0x589ade));
          })
        : (messagesContainer[_0xfe6f9(0xcd)] = _0x151568(0xd0)));
  });
}
