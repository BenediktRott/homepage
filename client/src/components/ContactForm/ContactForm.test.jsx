import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "./ContactForm";
import { afterEach, beforeEach, describe, expect } from "vitest";

async function fillForm(user) {
  await user.type(screen.getByLabelText(/your name/i), "Anna");
  await user.type(screen.getByLabelText(/your email/i), "anna@example.com");
  await user.type(
    screen.getByLabelText(/your message/i),
    "Hello, this is a test",
  );
}

const submit = () => screen.getByRole("button", { name: /send it/i });

describe("Contact Form", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test("Sends form data as JSON", async () => {
    fetch.mockResolvedValue({ ok: true });
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillForm(user);
    await user.click(submit());

    expect(fetch).toHaveBeenCalledTimes(1);
    const [url, options] = fetch.mock.calls[0];

    expect(url).toBe(`${process.env.VITE_API_URL}/contact`);
    expect(options.method).toBe("POST");
    expect(JSON.parse(options.body)).toEqual({
      name: "Anna",
      email: "anna@example.com",
      message: "Hello, this is a test",
      website: "",
    });
  });

  test("Button gets removed during sending and sent", async () => {
    let resolveFetch;
    fetch.mockResolvedValue(new Promise((r) => (resolveFetch = r)));
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillForm(user);
    await user.click(submit());

    expect(screen.queryByTestId("submitButton")).not.toBeInTheDocument();

    resolveFetch({ ok: true });

    expect(screen.queryByTestId("submitButton")).not.toBeInTheDocument();
  });
});
