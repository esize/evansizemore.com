import nodemailer from 'nodemailer';
import { google } from 'googleapis';
const OAuth2 = google.auth.OAuth2;

export default async (req, res) => {
  const { name, email, message } = req.body;

  const createTransporter = async () => {
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject('Failed to create access token :(');
        }
        resolve(token);
      });
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'workwith@evansizemore.com',
        accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    });

    return transporter;
  };

  try {
    let emailTransporter = await createTransporter();
    await emailTransporter.sendMail({
      from: email,
      replyTo: email,
      to: 'workwith@evansizemore.com',
      subject: `Contact Form | ${name}`,
      html: `
        <h1>You have a new contact form submission!</h1><br />
        <h2>Name: ${name}</h2><br />
        <h2>Message:</h2><br />
        <p>${message}</p>
      `,
    });

    console.log('Message Sent!');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
