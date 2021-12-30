import { CorsOptions } from "cors";
import { PORT } from "../index";
const whitelist = [`http://localhost:${PORT}`, 'https://edubasabe.github.io'];
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    console.log("origin", origin);
    console.log("whitelist", whitelist);
    if (origin && whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

export default corsOptions;