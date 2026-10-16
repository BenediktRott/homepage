import styles from "./Window.module.css";
import partlyCloudyIcon from "../../assets/icons/partly_cloudy_day.svg";
import { Link } from "react-router";

export function Window({ title, headerType, onClose, children }) {
  return (
    <div className={styles.window}>
      <div className={styles.titlebar}>
        <div className={styles.dots}>
          <div className={`${styles.dot} ${styles.active}`} onClick={onClose}>
            x
          </div>
          <Link to={"/"} className={styles.link}>
            <div className={`${styles.dot} ${styles.back}`}>&lt;</div>
          </Link>
          <div className={styles.dot} />
        </div>
        <span>{title}</span>

        {headerType === "weather" ? (
          <div className={styles.weather}>
            <img src={partlyCloudyIcon} alt="" />
            <span>14°C</span>
          </div>
        ) : (
          <Link to="/" className={styles.backToHome}>
            &larr; back home
          </Link>
        )}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
