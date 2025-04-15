import nodemailer from "nodemailer";

const newsLetter = async(req, res) => {
  const {name, email} = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host:'smtp.gmail.com',
      port:587, // tls
      secure:false, // false for tls, true for ssl port 465
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `WeFurn <${process.env.EMAIL}>`,
      to: email,
      subject: "You are subscibed to WeFurn",
      text: `Hi ${name}, thanks for subscribing to Furni.`,
      html: `<h3>Hi ${name},</h3><p>Thank you for subscribing to WeFurn. You'll now receive updates and exclusive offers.</p>`,
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({message: "Email sent successfuly"});
  } catch(err) {
    console.error(err);
    res.status(500).json({message: "Failed to sent mail", error:err.message});
  }
}

export default newsLetter;