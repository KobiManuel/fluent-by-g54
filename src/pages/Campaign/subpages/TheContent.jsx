import React from "react";
import styles from "../_Main.module.scss";
import image1 from "../../../assets/images/3dflip.gif";
import image2 from "../../../assets/images/10.gif";
import image3 from "../../../assets/images/15.gif";

const TheContent = () => {
  return (
    <div className={styles.brand}>
      <div
        className={styles["brand-inner"]}
        style={{
          flexDirection: "row",
          overflowX: "auto",
          width: "80%",
          justifyContent: "flex-start",
        }}
      >
        <img
          style={{ width: "150%", objectFit: "cover" }}
          className={styles["describe-brand"]}
          src={image1}
          alt="/"
        />
        <img
          style={{ width: "150%", objectFit: "cover" }}
          className={styles["describe-brand"]}
          src={image2}
          alt="/"
        />
        <img
          style={{ width: "150%", objectFit: "cover" }}
          className={styles["describe-brand"]}
          src={image3}
          alt="/"
        />
      </div>
    </div>
  );
};

export default TheContent;
