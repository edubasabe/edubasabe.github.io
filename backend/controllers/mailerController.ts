import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const { USERNAME, PASSWORD } = process.env;

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: USERNAME,
    pass: PASSWORD, // generated ethereal password
  },
});

transporter
  .verify()
  .then(() => {
    console.log("Ready for send emails");
  })
  .catch((reason) => {
    console.log("There was not possible verify:", reason);
  });

export type SendEmailProps = {
  full_name: string;
  email: string;
  message: string;
};

export function sendEmail({ full_name, email, message }: SendEmailProps) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from: '"Website Contact Form" <ebasabedesign@gmail.com>',
        to: "edubasabe1@gmail.com",
        subject: "[Website Contact Form] Hello Edu!",
        html: `
      <b>De: ${full_name} (${email})</b> 
      <p>Mensaje: <br />
      ${message}</p>
      `,
      },
      (err) => {
        if (err) {
          console.error("There was an error:", err);
          reject(err);
        } else resolve("Email sent");
      }
    );
  });
}
