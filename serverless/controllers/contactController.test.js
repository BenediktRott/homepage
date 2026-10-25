import request from "supertest";
import { mockClient } from "aws-sdk-client-mock";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { app } from "../index.js";
import { afterEach, beforeEach, describe, expect } from "vitest";

const sesMock = mockClient(SESv2Client);

const validBody = {
  name: "Anna",
  email: "anna@example.com",
  message: "Hello, this is a test message",
};

beforeEach(() => {
  sesMock.reset();
  sesMock.on(SendEmailCommand).resolves({ MessageId: "abc" });
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("POST /contact", () => {
  test("Sends an Email and returns 204", async () => {
    const res = await request(app).post("/contact").send(validBody);

    expect(res.status).toBe(204);
    const calls = sesMock.commandCalls(SendEmailCommand);
    expect(calls).toHaveLength(1);

    const input = calls[0].args[0].input;
    expect(input.FromEmailAddress).toBe("noreply@example.com");
    expect(input.Destination.ToAddresses).toEqual(["me@example.com"]);
    expect(input.ReplyToAddresses).toEqual(["anna@example.com"]);
    expect(input.Content.Simple.Subject.Data).toBe("Contact form: Anna");
  });

  it("silently ignores honeypot submissions", async () => {
    const res = await request(app)
      .post("/contact")
      .send({ ...validBody, website: "http://spam.example" });

    expect(res.status).toBe(204);
    expect(sesMock.commandCalls(SendEmailCommand)).toHaveLength(0);
  });

  it.each([
    ["missing name", { ...validBody, name: "" }],
    ["invalid email", { ...validBody, email: "not-an-email" }],
    ["short message", { ...validBody, message: "short" }],
    ["array instead of string", { ...validBody, name: ["a", "b"] }],
  ])("returns 400 for %s", async (_label, body) => {
    const res = await request(app).post("/contact").send(body);

    expect(res.status).toBe(400);
    expect(sesMock.commandCalls(SendEmailCommand)).toHaveLength(0);
  });

  it("returns 500 when SES fails", async () => {
    sesMock.on(SendEmailCommand).rejects(new Error("SES down"));

    const res = await request(app).post("/contact").send(validBody);

    expect(res.status).toBe(500);
    expect(res.body).toEqual({ error: "Something went wrong" });
  });
});
