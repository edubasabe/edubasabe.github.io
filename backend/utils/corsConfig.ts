import dotenv from "dotenv";
import { CorsOptions } from "cors";
dotenv.config();

const { DOMAINS_ALLOWED } = process.env;
const whitelist = DOMAINS_ALLOWED?.split(",");

const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (origin && whitelist?.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

export default corsOptions;
