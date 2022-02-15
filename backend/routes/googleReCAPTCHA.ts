import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import { validationResult } from "express-validator";

export async function googleReCAPTCHA(req: Request, res: Response) {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    const { token }: { token: string } = req.body;
    const isValid = await validateCAPTCHA(token);
    if (isValid) res.status(200).json({ message: "Successful validation" });
    else res.status(401).json({ message: "validateCAPTCHA error" });
  }
}

async function validateCAPTCHA(token: string): Promise<boolean> {
  const secret = process.env.GOOGLE_CAPTCHAV2_SECRET;
  const verificationURL = "https://www.google.com/recaptcha/api/siteverify";
  try {
    const { data } = await axios.post(verificationURL, undefined, {
      params: {
        secret: secret,
        response: token,
      },
    });

    if (data.success === false) {
      throw new Error(JSON.stringify(data));
    }

    console.log("[validateCAPTCHA][Response]:", data);
    return true;
  } catch (err) {
    console.error("[validateCAPTCHA][Error]:", err);
    return false;
  }
}
