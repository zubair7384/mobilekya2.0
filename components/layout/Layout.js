import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Header from "../header/Header";
import styles from "./Layout.module.scss";

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme} ${styles.LayoutContainer}`}>
      {/* <div className={`Background ${styles.LayoutWrapper}`}> */}
      <Header />
      {children}
      {/* </div> */}
    </div>
  );
};
