import { Link } from "react-router";
import styles from "./ColoredCard.module.css";

export function ColoredCard({ to, title, children, className }) {
  const classNameCombined = className
    ? `${styles.card} ${className}`
    : styles.card;
  return (
    <Link to={to} className={classNameCombined}>
      <h2>{title}</h2>
      {children}
    </Link>
  );
}
