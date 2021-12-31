import { Request, Response } from "express";
import { validationResult } from 'express-validator';
import axios from 'axios'
import { sendEmail, SendEmailProps } from '../controllers/mailerController';

export function googleReCAPTCHA(req: Request, res: Response) {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      const { token }: { token: string } = req.body;
      // sendEmail({ full_name, email, message });
      res.status(200).json({ message: 'Successful sent' })
    }
}