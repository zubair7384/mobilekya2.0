import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Image from "next/image";
import { Input } from "antd";

import styles from "./Header.module.scss";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { Search } = Input;
  return (
    <div className={`BorderBottom ${styles.Container}`}>
      <div className={`HeaderImageWrapper ${styles.LogoWrapper}`}>
        {theme === "Light" ? (
          <Image
            className="HeaderImage"
            src="/logoDay.svg"
            alt="mobilekya logo"
            width={120}
            height={100}
          />
        ) : (
          <Image
            className="HeaderImage"
            src="/logoDark.svg"
            alt="mobilekya logo"
            width={120}
            height={100}
          />
        )}
      </div>
      <div className={styles.SearchWrapper}>
        <Search
          placeholder="Search"
          allowClear
          // onSearch={onSearch}
          style={{ width: "100%" }}
        />
      </div>
      <div className={`HeaderImageWrapper ${styles.LogWrapper}`}>
        {theme === "Light" ? (
          <Image
            className="HeaderImage"
            src="/log.svg"
            alt="log"
            width={20}
            height={20}
          />
        ) : (
          <Image
            className="HeaderImage"
            src="/logDark.svg"
            alt="log"
            width={20}
            height={20}
          />
        )}
      </div>
      <div className={`HeaderImageWrapper ${styles.HamburgerWrapper}`}>
        {theme === "Light" ? (
          <Image
            className="HeaderImage"
            src="/hamburgerDay.svg"
            alt="mobilekya hamburger"
            width={20}
            height={20}
          />
        ) : (
          <Image
            className="HeaderImage"
            src="/hamburgerDark.svg"
            alt="mobilekya hamburger"
            width={20}
            height={20}
          />
        )}
      </div>
      <div
        className={`HeaderImageWrapper ${styles.DayNightWrapper}`}
        onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}
      >
        {theme === "Light" ? (
          <Image
            className="HeaderImage"
            src="/night.svg"
            alt="night button"
            width={20}
            height={20}
          />
        ) : (
          <Image
            className="HeaderImage"
            src="/dayMode.svg"
            alt="night button"
            width={20}
            height={20}
          />
        )}
      </div>
    </div>
  );
};
export default Header;
