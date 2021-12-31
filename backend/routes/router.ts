import express, { Request, Response } from "express";
import { body } from 'express-validator'
import validateDomainOrigin from "../middlewares/validateDomainOrigin";
import { googleReCAPTCHA } from "./googleReCaptcha";
import { sendMessage } from "./sendMessage";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.json({
      message: "Server is up",
    });
});

router.get("/ping", (req: Request, res: Response) => {
    res.json({
      message: "pong!",
    });
});

router.post("/contact/validation", 
  body('token').notEmpty().trim().escape(),
  googleReCAPTCHA
);

router.post("/contact/send", validateDomainOrigin,
  body('full_name').notEmpty().trim().escape(),
  body('email').isEmail(),
  body('message').notEmpty().trim().escape(),
  sendMessage
);
export default router;