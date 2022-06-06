import React from "react";
import Image from "next/image";
import styles from "./HomeBanner.module.scss";

const HomeBanner = () => {
  return (
    <div className={styles.Container}>
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
  );
};
export default HomeBanner;
