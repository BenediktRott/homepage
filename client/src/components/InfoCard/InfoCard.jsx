import styles from "./InfoCard.module.css";

export function InfoCard({ title, children, className }) {
  const combinedClassName = `${styles.infoCard} ${className}`;

  return (
    <div className={combinedClassName}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
