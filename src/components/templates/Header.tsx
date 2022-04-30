import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "../UI/modules/Header.module.css";
import { IoGameController } from "react-icons/io5";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeContext } from "../templates/Main";
import { MainTheme } from "./MainTheme";
import { FavoritesContext } from "../store/Store";
import { Search } from "../UI/molecules/Search";



export const Header: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const { amount } = useContext(FavoritesContext);


  const headerStyle: MainTheme = {
    dark: {
      backgroundColor: "black",
      color: "white",
    },
    light: {
      backgroundColor: "#f8f7f7",
      color: "black",
    },
    common: {
      transition: "all is ease",
    },
  };

  const themeStyle = {
    ...headerStyle.common,
    ...(theme === "light" ? headerStyle.light : headerStyle.dark),
  };

  return (
    <header style={themeStyle} className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={styles.leftpart}>
          <NavLink to="/">
            {theme === "light" ? (
              <IoGameController className={styles.logo1} />
            ) : (
              <IoGameController className={styles.logo} />
            )}
          </NavLink>
          <Search />
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <NavLink to="/" style={themeStyle}>
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink to="popular" style={themeStyle}>
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink to="favorites" style={themeStyle}>
                {"Favorites (" + amount + ")"}
              </NavLink>
            </li>
            <ThemeToggle />
          </ul>
        </nav>
      </div>
    </header>
  );
};
