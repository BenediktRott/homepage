import styles from "./LinkButton.module.css";

export function LinkButton({ href, children }) {
  return (
    <>
      <a href={href} target="_blank" rel="noreferrer">
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>{children}</button>
        </div>
      </a>
    </>
  );
}
