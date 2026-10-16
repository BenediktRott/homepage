import styles from "./InfoCard.module.css";

export function InfoCard({ title, children }) {
  return (
    <div className={styles.infoCard}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
