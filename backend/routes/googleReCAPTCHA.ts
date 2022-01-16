import { Request, Response } from "express";
import { validationResult } from "express-validator";
import axios from "axios";

export async function googleReCAPTCHA(req: Request, res: Response) {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    const { token }: { token: string } = req.body;
    const isValid = await validateCAPTCHA(token);
    if (isValid) res.status(200).json({ message: "Successful validation" });
  }
}

async function validateCAPTCHA(token: string): Promise<boolean> {
  const secret = process.env.GOOGLE_CAPTCHAV2_SECRET;
  const verificationURL = "https://www.google.com/recaptcha/api/siteverify";
  try {
    const res = await axios.post(verificationURL, {
      secret,
      response: token,
    });

    console.log("res", res);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
