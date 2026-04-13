import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

/**
 * API ROUTE - EMAIL SENDING
 */
app.post("/api/contact", async (req, res) => {
  const { name, email, service, budget, details } = req.body;

  if (!name || !email || !details) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Consultation Request from ${name} (HBLabs)`,
      text: `
Name: ${name}
Email: ${email}
Service: ${service}
Budget: ${budget}
Details: ${details}
      `,
      html: `
        <h3>New Consultation Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Details:</strong> ${details}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

/**
 * HEALTH CHECK (optional but useful)
 */
app.get("/api/health", (_, res) => {
  res.json({ status: "ok" });
});

/**
 * START SERVER
 */
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});