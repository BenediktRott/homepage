import { Link } from "react-router";

export function BackToHomeElement() {
  return (
    <Link to="/" style={{ color: "inherit" }}>
      &larr; back home
    </Link>
  );
}
