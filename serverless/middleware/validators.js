import { body, matchedData, validationResult } from "express-validator";

export const validateContact = [
  body("name").isString().trim().isLength({ min: 1, max: 100 }),
  body("email").isString().trim().isEmail().isLength({ max: 254 }),
  body("message").isString().trim().isLength({ min: 10, max: 5000 }),
];
