// vitest.config.js
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    env: {
      NODE_ENV: "test",
      AWS_REGION: "eu-central-1",
      MAIL_FROM: "noreply@example.com",
      MAIL_TO: "me@example.com",
      WEATHER_API_KEY: "test-key",
    },
  },
});
