import { InfoCard } from "../InfoCard/InfoCard";
import styles from "./ToolboxItem.module.css";

export function ToolboxItem({ data }) {
  return (
    <>
      <div className={styles.toolboxItem}>
        <InfoCard title={data.title} className={styles.infoCard}>
          {data.tags ? (
            <div className={styles.tags}>
              {data.tags.map((item) => (
                <div className={styles.tag}>{item}</div>
              ))}
            </div>
          ) : (
            ""
          )}

          <ul className={styles.list}>
            {data.list
              ? data.list.map((item) => (
                  <li className={styles.listItem}>{item}</li>
                ))
              : ""}
          </ul>
        </InfoCard>
      </div>
    </>
  );
}
