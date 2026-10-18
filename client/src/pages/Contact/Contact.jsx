import { useEffect } from "react";
import { useWindow } from "../../context/WindowContext";
import styles from "./Contact.module.css";
import { BackToHomeElement } from "../../components/HeaderElements/BackToHomeElement";
import { Window } from "../../components/Window/Window";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { LinkButton } from "../../components/LinkButton/LinkButton";

export function Contact() {
  const { configureWindow } = useWindow();

  useEffect(() => {
    configureWindow({ title: "contact.html", header: <BackToHomeElement /> });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <ContactForm />

        {/* Further links */}
        <InfoCard title="or find me here">
          <div className={styles.links}>
            <LinkButton href="https://github.com/BenediktRott">
              <div className={styles.linkContent}>
                <span>github</span>
                <span>&#x2197;</span>
              </div>
            </LinkButton>

            <LinkButton href="mailto:you@example.com">
              <div className={styles.linkContent}>
                <span>email</span>
                <span>&#x2197;</span>
              </div>
            </LinkButton>
          </div>
        </InfoCard>
      </div>
    </>
  );
}
