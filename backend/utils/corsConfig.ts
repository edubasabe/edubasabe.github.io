import dotenv from "dotenv";
import { CorsOptions } from "cors";
dotenv.config();

const { DOMAINS_ALLOWED } = process.env;
const whitelist = DOMAINS_ALLOWED?.split(",");
const isProd = process.env.NODE_ENV === "production";

function setup(): CorsOptions {
  if (isProd) {
    return {
      origin: function (origin, callback) {
        if (origin && whitelist?.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      }
    }
  }
  return {}
}

const corsOptions: CorsOptions = setup();

export default corsOptions;
