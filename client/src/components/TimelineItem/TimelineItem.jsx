import styles from "./TimelineItem.module.css";

export function TimelineItem({ when, what, where, description, current }) {
  return (
    <div className={`${styles.entry} ${current ? styles.now : ""}`}>
      <div className={styles.when}>{when}</div>
      <h3 className={styles.what}>{what}</h3>
      <div className={styles.where}>{where}</div>
      {description && <div className={styles.description}>{description}</div>}
    </div>
  );
}
