import express, { Request, Response } from "express";
import dotenv from "dotenv";
import logger from "morgan";
/* import cors from "cors";
import corsOptions from './utils/corsConfig' */
import router from './router/router'

dotenv.config();
const app = express();
export const PORT = 3000;
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors(corsOptions))

app.use('/', router);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});