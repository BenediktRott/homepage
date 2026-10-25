import { useState } from "react";
import styles from "./ContactForm.module.css";

const API_URL = import.meta.env.VITE_API_URL ?? "";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState("idle"); //idle | sending | sent | error

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus("sent");
      console.log(status);
      clearInput();
    } catch (error) {
      setStatus("error");
    }
  }

  function clearInput() {
    setName("");
    setEmail("");
    setMessage("");
    setWebsite("");
  }

  return (
    <div className={styles.formContainer}>
      {/* TITLEBAR */}
      <div className={styles.titlebar}>
        <span>new-message.txt</span>
        <div className={styles.status}>
          <div className={styles.dot}></div>
          <span>draft</span>
        </div>
      </div>

      {/* FORM */}
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.labelledInput}>
          <label htmlFor="name" className={styles.label}>
            your name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Anna"
            required
          />
        </div>

        <div className={styles.labelledInput}>
          <label htmlFor="email" className={styles.label}>
            your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>

        <div className={styles.labelledInput}>
          <label htmlFor="message" className={styles.label}>
            your message
          </label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="your message goes here"
            required
          ></textarea>
        </div>

        <input
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px" }}
        />

        <div className={styles.buttonContainer}>
          {(status === "idle" || status === "error") && (
            <button
              type="submit"
              className={styles.submitButton}
              disabled={status === "sending" || status === "sent"}
              testId="submitButton"
            >
              {status === "sending" ? (
                "sending…"
              ) : status === "sent" ? (
                "sent! ✓"
              ) : (
                <>send it &rarr;</>
              )}
            </button>
          )}

          {/* Status Messages */}
          {status === "error" && (
            <span className={styles.error}>
              An error occurred, please try again.
            </span>
          )}

          {status === "sending" && <span>Sending...</span>}

          {status === "sent" && (
            <span className={styles.success}>Message sent &#x2713;</span>
          )}
        </div>
      </form>
    </div>
  );
}
