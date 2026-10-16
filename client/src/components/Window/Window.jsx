import styles from "./Window.module.css";
import partlyCloudyIcon from "../../assets/icons/partly_cloudy_day.svg";

export function Window({ title, onClose, children }) {
  return (
    <div className={styles.window}>
      <div className={styles.titlebar}>
        <div className={styles.dots}>
          <div className={`${styles.dot} ${styles.active}`} onClick={onClose} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
        <span>{title}</span>
        <div className={styles.weather}>
          <img src={partlyCloudyIcon} alt="" />
          <span>14°C</span>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
