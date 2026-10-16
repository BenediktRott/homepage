import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import deskSvg from "../../assets/desk-background.svg";
import avatar from "../../assets/avatar.svg";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { ColoredCard } from "../../components/ColoredCard/ColoredCard";
import { Link } from "react-router";
import { useWindow } from "../../context/WindowContext";

export function Home() {
  const { configureWindow } = useWindow();

  useEffect(() => {
    configureWindow({ title: "homepage.html" });
  }, [configureWindow]);

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
          <h1>hi, i'm Bene</h1>
          <p className={styles.aboutDescription}>
            Data Science Student at TUM, tinkering with full-stack development
          </p>
        </div>
      </section>

      <hr />

      {/* ON MY DESK */}

      <InfoCard title="what's on my desk right now">
        <ul className={styles.list}>
          <li>
            Tutoring Introduction into Computer Science (for non informatics
            studies)
          </li>
          <li>Learning full-stack development</li>
          <li>
            Planning & Designing a web app for gymnastics coaches (hours
            tracking & note-taking)
          </li>
        </ul>
      </InfoCard>

      {/* Links */}
      <section className={styles.linksSection}>
        <ColoredCard to="/" title="About Me" className={styles.aboutMeCard}>
          <span>Education, Skills and a CV</span>
        </ColoredCard>

        <ColoredCard to="/" title="Projects" className={styles.projectsCard}>
          <span>check out my public programming projects</span>
        </ColoredCard>

        <ColoredCard to="/" title="Contact me" className={styles.contactCard}>
          <span>You can contact me via e-mail or through my contact form</span>
        </ColoredCard>
      </section>
    </>
  );
}
