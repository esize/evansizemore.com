import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { name, email, message } = req.body;

  console.log('Form submitted!');
  console.log(name, email, message);

  //   const transporter = nodemailer.createTransport({
  //     host: 'smtp.gmail.com',
  //     port: 445,
  //     secure: true,
  //     auth: {
  //       user: process.env.user,
  //       pass: process.env.pass,
  //     },
  //   });

  //   try {
  //     const emailRes = await transporter.sendMail({
  //       from: email,
  //       to: 'workwith@evansizemore.com',
  //       subject: `Contact Form: ${name}`,
  //       html: `
  //                 <h1>You have a new contact form submission!</h1><br />
  //                 <h2>Name: ${name}</h2><br />
  //                 <h2>Message:</h2><br />
  //                 <p>${message}</p>
  //             `,
  //     });

  //     console.log('Message Sent!');
  //   } catch (err) {
  //     console.log(err);
  //   }

  res.status(200).json(req.body);
};
