import { useState } from "react";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
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

        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.submitButton}>
            send it &rarr;
          </button>
        </div>
      </form>
    </div>
  );
}
