import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { name, email, message } = req.body;

  // Configure the transporter – ensure you set EMAIL_USER and EMAIL_PASS in your environment variables.
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // your email address (e.g. "ishakkorichi09@gmail.com")
      pass: process.env.EMAIL_PASS, // your email password or app-specific password
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // sender address from env
      // Set the recipient email to your desired email:
      to: "ishakkorichi09@gmail.com",
      subject: `New contact form submission from ${name}`,
      text: `Message from ${name} (${email}):\n\n${message}`,
    });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
