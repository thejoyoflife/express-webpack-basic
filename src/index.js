import express from "express";
import compression from "compression";
import helmet from "helmet";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";

import winston from "./winston";
import routes from "./routes";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(compression());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("combined", { stream: winston.stream }));
app.use(function(err, req, res, next) {
  winston.error(
    `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${
      req.method
    } - ${req.ip}`
  );
});

app.use("/", routes);

app.listen(PORT, () => console.log("Server listening at port:", PORT));
