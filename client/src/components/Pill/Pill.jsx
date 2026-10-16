import styles from "./Pill.module.css";

export function Pill({ children }) {
  return <div className={styles.pill}>{children}</div>;
}
