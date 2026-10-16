import { useEffect } from "react";
import { useWindow } from "../../context/WindowContext";
import styles from "./AboutMe.module.css";
import avatar from "../../assets/avatar.svg";
import { Pill } from "../../components/Pill/Pill";
import { TimelineItem } from "../../components/TimelineItem/TimelineItem";
import { badges, timelineData, toolboxData } from "../../data/aboutMeData";
import { ToolboxItem } from "../../components/ToolboxItem/ToolboxItem";

export function AboutMe() {
  const { configureWindow } = useWindow();

  useEffect(() => {
    configureWindow({
      title: "about-me.html",
      headerType: "home",
    });
  }, [configureWindow]);

  return (
    <>
      {/* ABOUT ME */}
      <section className={styles.aboutMe}>
        <img
          className={styles.avatar}
          src={avatar}
          alt="Profile Picture showing a cat"
          width="150px"
        />
        <div className={styles.aboutText}>
          <h1>Benedikt Rott</h1>
          <div className={styles.pills}>
            {badges.map((item) => (
              <Pill>{item.name}</Pill>
            ))}
          </div>
        </div>
      </section>

      {/* HR */}
      <hr />

      {/* TIMELINE */}
      <h2>the path so far</h2>
      <div className={styles.timeline}>
        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>

      {/* HR */}
      <hr />

      {/* toolbox */}
      <h2>toolbox</h2>
      <div className={styles.toolbox}>
        {toolboxData.map((item) => (
          <ToolboxItem data={item}></ToolboxItem>
        ))}
      </div>
    </>
  );
}
