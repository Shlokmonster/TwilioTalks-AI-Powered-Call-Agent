import express from 'express';
import bodyParser from 'body-parser';
import OpenAI from 'openai/index.mjs';
import twilio from 'twilio'; 
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({extended: false}))

const twiml= twilio.twiml;
const client = (process.env.TWILIO_AUTH_TOKEN, process.env.TWILIO_ACCOUNT_SID);
const openai = new OpenAI(process.env.OPENAI_API_KEY);
app.post("/voice",(req,res)=>{
    const twimlResponse = new twiml.Response();
    twimlResponse.say(
            "Hey! I'm an assistant for [Your Name]. Please leave your message after the beep, and I’ll let them know what you said."
    );
    twimlResponse.record({
        maxLength: 30,
        transcribe: true,
        transcribeCallback: '/transcription',
    });
    res.say("Thank you! Goodbye");

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.send(twimlResponse.toString());
})

app.post("/transcription",async (req,res) => {
const message =req.body.TranscriptionText;
const prompt = `Summarize this voicemail into a short message for the user.
Voicemail: ${message} 
 summary`;

 const completion = await openai.chat.completions.create({
    model:"gpt-4",
    messages: [{ role: "user", content: prompt }],
 });
 const summary = completion.choices[0].message.content;

//   sending the sms of the summary to the phone vai whatsapp
await client.message.create({
    body: `📞 New voicemail summary:\n"${summary}"`,
    from: 'whatsapp:+14155238886', // Twilio Sandbox WhatsApp number
    to: `whatsapp:${process.env.YOUR_PHONE}` // Your verified WhatsApp number
})

res.sendStatus(200);

})







app.get("/", (req, res) => {
    console.log(req.url);
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
