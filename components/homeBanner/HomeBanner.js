import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Image from "next/image";
import styles from "./HomeBanner.module.scss";

const HomeBanner = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <div
        className={`${styles.Container} ${
          theme === "Dark" ? "DarkFilter" : ""
        }`}
      >
        <div className={styles.Wrapper}>
          <div className={styles.BannerImageWrapper}>
            <Image
              className={styles.BannerImage}
              src="/bannerPerson.svg"
              alt="mobilekya banner person"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
