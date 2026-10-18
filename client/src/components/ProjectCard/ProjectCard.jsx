import { useState } from "react";
import { Pill } from "../Pill/Pill";
import styles from "./ProjectCard.module.css";

export function ProjectCard({ projectData, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const name = `${index + 1}_${projectData.title.toLowerCase().replaceAll(" ", "-")}`;

  function handleOnClick() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className={styles.cardContainer} onClick={handleOnClick}>
      <div className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}>
        {/* FRONT */}
        <div className={`${styles.cardFace} ${styles.cardFront}`}>
          {/* TITLEBAR */}
          <div className={styles.titlebar}>
            <span>{name}</span>
            {projectData.status ? (
              <div className={styles.status}>
                <div className={styles.dot}></div>
                <span>{projectData.status}</span>
              </div>
            ) : (
              ""
            )}
          </div>

          {/* CONTENT */}
          <div className={styles.content}>
            <h2 className={styles.title}>{projectData.title}</h2>
            <p className={styles.description}>{projectData.description}</p>

            {projectData.tags ? (
              <div className={styles.tags}>
                {projectData.tags.map((tag, index) => (
                  <Pill key={index}>{tag}</Pill>
                ))}
              </div>
            ) : (
              ""
            )}

            <hr />

            {projectData.source ? (
              <a
                href={projectData.source}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                &rarr; source
              </a>
            ) : (
              ""
            )}
            {projectData.demo ? (
              <a
                href={projectData.demo}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                &rarr; demo
              </a>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* BACK */}
        <div className={`${styles.cardFace} ${styles.cardBack}`}>
          {projectData.image ? (
            <img
              src={projectData.image}
              height="300px"
              className={styles.image}
            />
          ) : (
            <span>Unfortunately there are no images available</span>
          )}
        </div>
      </div>
    </div>
  );
}
