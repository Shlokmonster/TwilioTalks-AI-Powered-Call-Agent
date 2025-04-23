# 🗣️ TwilioTalks – AI-Powered Call Agent

**TwilioTalks** is an intelligent voice-based assistant that uses the **Twilio Voice API** and **OpenAI GPT-4** to conduct real-time conversations with users over phone calls. It understands natural language, responds contextually, and sends automated call summaries via WhatsApp.

---

## 🚀 Features

- 📞 AI-powered phone call interaction using Twilio + GPT-4
- 🔊 Real-time speech-to-text and text-to-speech conversion
- 🤖 Dynamic, context-aware responses powered by GPT-4
- 💬 WhatsApp integration for post-call conversation summaries
- 🔐 Secure, API-based architecture with modular backend

---

## 🛠️ Tech Stack

| Layer         | Tech                        |
|---------------|-----------------------------|
| Backend       | Node.js, Express.js         |
| AI Engine     | OpenAI GPT-4 API            |
| Telephony     | Twilio Voice API            |
| Messaging     | WhatsApp Business API       |
| UI/Testing    | Tailwind CSS, Ngrok         |

---

## 📸 Demo

*(Coming Soon)*  
<!-- Add a GIF or video walkthrough link here -->

---

## 📦 Installation

```bash
git clone https://github.com/Shlokmonster/TwilioTalks-AI-Powered-Call-Agent.git
cd TwilioTalks-AI-Powered-Call-Agent
npm install
```

### 🔐 Environment Variables

Create a `.env` file in the root directory and add the following:

```env
OPENAI_API_KEY=your_openai_key
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number
WHATSAPP_NUMBER=your_whatsapp_number
```

---

## ▶️ Start the Server

```bash
node index.js
```

---

## ✅ How It Works

1. A user initiates a phone call to your Twilio number.
2. Twilio streams the audio via webhook to your server.
3. Audio is converted to text and sent to GPT-4.
4. GPT-4 generates a natural language response.
5. Response is converted to speech and sent back over the call.
6. After the call, a conversation summary is sent to WhatsApp.

---

## 📌 Future Enhancements

- 🎙️ Add voice personalization
- 🧠 Store call history and transcripts
- ☁️ Deploy on AWS/GCP for production use

---

## 🤝 Contributions

Open to contributions! If you'd like to suggest features or report bugs, feel free to open an issue or pull request.

---

## 📄 License

MIT License © 2025 Shlok Kadam

---

