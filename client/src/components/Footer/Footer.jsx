import { Link } from "react-router";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <span>Last updated October 2026</span>

        <div className={styles.links}>
          <Link to="/impressum" className={styles.Link}>
            Impressum
          </Link>
          <Link to="/datenschutzerklaerung" className={styles.Link}>
            Datenschutzerklärung
          </Link>
        </div>
      </div>
    </>
  );
}
