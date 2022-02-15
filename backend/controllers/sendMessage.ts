import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { sendEmail, SendEmailProps } from "./mailerController";

export function sendMessage(req: Request, res: Response) {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    const { full_name, email, message }: SendEmailProps = req.body;
    sendEmail({ full_name, email, message });
    res.status(200).json({ message: "Successful sent" });
  }
}
