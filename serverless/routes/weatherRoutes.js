import { Router } from "express";
import * as weatherController from "../controllers/weatherController.js";

export const weatherRouter = new Router();

weatherRouter.get("/", weatherController.getWeather);
weatherRouter.get("/:location", weatherController.getWeatherLocation);
