import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  console.log("📩 Received request to send email:", req.body);

  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    console.error("❌ Missing required fields!");
    return res.status(400).json({ error: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
 
    auth: {
      user: "mekalaganeshreddy796@gmail.com", // Must be set in .env.local
      pass: "splmpcjdbmybnzez", // Must be set in .env.local
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: subject,
      text: message,
    });

    console.log("✅ Email sent successfully!");
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Email sending failed:", error.message);
    res.status(500).json({ error: error.message });
  }
}
