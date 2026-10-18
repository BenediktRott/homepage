import { useEffect } from "react";
import { useWindow } from "../../context/WindowContext";
import styles from "./Projects.module.css";
import { BackToHomeElement } from "../../components/HeaderElements/BackToHomeElement";
import avatar from "../../assets/avatar.svg";
import { projectData } from "../../data/projectData";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

export function Projects() {
  const { configureWindow } = useWindow();

  useEffect(() => {
    configureWindow({ title: "projects.html", header: <BackToHomeElement /> });
  }, []);

  return (
    <>
      {/* About Me */}
      <section className={styles.aboutMe}>
        <img
          className={styles.avatar}
          src={avatar}
          alt="Profile Picture showing a cat"
          width="150px"
        />
        <div className={styles.aboutText}>
          <h1>things i've built</h1>
        </div>
      </section>

      <hr />

      <div className={styles.projects}>
        {projectData.map((item, index) => (
          <ProjectCard key={index} index={index} projectData={item} />
        ))}
      </div>
    </>
  );
}
