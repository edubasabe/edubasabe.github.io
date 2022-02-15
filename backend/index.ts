import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import cors from "cors";
import corsOptions from "./utils/corsConfig";
import router from "./routes/router";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

app.use("/", router);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
