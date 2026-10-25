import express from "express";
import serverlessExpress from "@codegenie/serverless-express";
import { weatherRouter } from "./routes/weatherRoutes.js";
import cors from "cors";
import { validateContact } from "./middleware/validators.js";
import * as contactController from "./controllers/contactController.js";

//process.loadEnvFile();

export const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
  }),
);
//app.use(cors());

app.use(express.json());

app.use("/weather", weatherRouter);

app.post("/contact", ...validateContact, contactController.postContact);

app.use((err, req, res, next) => {
  console.error(err.name, err.message);
  res.status(500).json({ error: "Something went wrong" });
});

if (process.env.ENV == "local") {
  app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
  });
}

export const handler = serverlessExpress({ app });
