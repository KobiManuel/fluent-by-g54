import React from "react";
import banner from "../../../assets/images/grid-image.png";
import styles from "./_Main.module.scss";

const GridSection = () => {
  return (
    <section className={styles.grid}>
      <div className={styles["grid-inner"]}>
        <p>Customize What People See</p>
        <img src={banner} alt="/" />
      </div>
    </section>
  );
};

export default GridSection;
