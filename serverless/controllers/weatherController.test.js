import request from "supertest";
import { app } from "../index.js";
import { afterEach, beforeEach, describe, expect, test } from "vitest";

describe("GET /weather/:location", () => {
  test("returns temp and icon with cache header", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ currentConditions: { temp: 12.3, icon: "rain" } }),
    });

    vi.stubGlobal("fetch", fetchMock);

    const res = await request(app).get("/weather/munich");

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ temp: 12.3, icon: "rain" });
    expect(res.headers["cache-control"]).toBe("public, max-age=900");

    const calledUrl = fetchMock.mock.calls[0][0];
    expect(calledUrl.pathname).toContain("/timeline/munich/today");
    expect(calledUrl.searchParams.get("key")).toBe("test-key");
  });

  test("encodes the location in the upstream URL", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ currentConditions: { temp: 1, icon: "fog" } }),
    });
    vi.stubGlobal("fetch", fetchMock);

    await request(app).get("/weather/" + encodeURIComponent("a/b?x=1"));

    const calledUrl = fetchMock.mock.calls[0][0];
    expect(calledUrl.pathname).not.toContain("a/b");
    expect(calledUrl.searchParams.has("x")).toBe(false);
  });
});
