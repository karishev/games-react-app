import React, { useContext } from "react";
import Container from "@mui/material/Container";
import styles from "../UI/modules/About.module.css";
import ava1 from "../assets/1.jpg";
import ava2 from "../assets/2.jpg";
import { ThemeContext } from "../templates/Main";
import { MainTheme } from "../templates/MainTheme";
export const AboutPage = () => {
  const { theme } = useContext(ThemeContext);
  const headerStyle: MainTheme = {
    dark: {
      backgroundColor: "#161515ed",
      color: "white",
    },
    light: {
      backgroundColor: "#f9f8f8",
      color: "black",
    },
    common: {
      transition: "all 1s ease",
    },
  };

  const themeStyle = {
    ...headerStyle.common,
    ...(theme === "light" ? headerStyle.light : headerStyle.dark),
  };
  return (
    <Container maxWidth="sm">
      <section className={styles.about__section} style={themeStyle}>
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </section>
      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.card}>
            <img src={ava1} alt="" style={{ width: "200px" }} />
            <div className={styles.container}>
              <h2>Shyngys</h2>
              <p className={styles.tittle}>Front-End Developer</p>
              <p>kvrishev@gmail.com</p>
              <p>
                <a href="https://github.com/karishev">
                  <button className={styles.button}>Contact</button>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <img src={ava2} alt="" style={{ width: "200px" }} />
            <div className={styles.container}>
              <h2>Ali</h2>
              <p className={styles.tittle}>Front-End Developer</p>
              <p>alichok_krasavchik@mail.ru</p>
              <p>
                <a href="https://github.com/ZuGo06">
                  <button className={styles.button}>Contact</button>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
