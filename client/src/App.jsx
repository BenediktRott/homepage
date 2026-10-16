import "./App.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Outlet } from "react-router";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import deskSvg from "./assets/desk-background.svg";

import { Window } from "./components/Window/Window";
import { Footer } from "./components/Footer/Footer";
import { useWindow } from "./context/WindowContext";

function App() {
  const [zoomed, setZoomed] = useState(false);
  const [done, setDone] = useState(false);
  const { title, headerType } = useWindow();

  function onClose() {
    setZoomed(false);
  }

  function onOpen(event) {
    if (!zoomed) {
      event.stopPropagation();
      setZoomed(true);
    }
  }

  useEffect(() => {
    const t = setTimeout(() => setZoomed(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div className={styles.viewport} onClickCapture={onOpen}>
        <div className={`${styles.scene} ${zoomed ? styles.zoomed : ""}`}>
          <img src={deskSvg} className={styles.bg} alt="" />
          <div className={styles.content}>
            <Window title={title} onClose={onClose} headerType={headerType}>
              <Outlet />
              <Footer />
            </Window>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
