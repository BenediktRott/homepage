import { InfoCard } from "../InfoCard/InfoCard";
import styles from "./ToolboxItem.module.css";

export function ToolboxItem({ data }) {
  return (
    <>
      <div className={styles.toolboxItem}>
        <InfoCard title={data.title} className={styles.infoCard}>
          {data.tags ? (
            <div className={styles.tags}>
              {data.tags.map((item, index) => (
                <div className={styles.tag} key={index}>
                  {item}
                </div>
              ))}
            </div>
          ) : (
            ""
          )}

          <ul className={styles.list}>
            {data.list
              ? data.list.map((item, index) => (
                  <li className={styles.listItem} key={index}>
                    {item}
                  </li>
                ))
              : ""}
          </ul>
        </InfoCard>
      </div>
    </>
  );
}
