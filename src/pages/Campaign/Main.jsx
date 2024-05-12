import React, { useEffect, useState } from "react";
import styles from "./_Main.module.scss";
import TheBrand from "./subpages/TheBrand";
import nextBtn from "../../assets/images/next-btn.png";
import TheProduct from "./subpages/TheProduct";
import TheContent from "./subpages/TheContent";

const Slider = ({ activeTab }) => {
  if (activeTab === 0) {
    return <TheBrand />;
  } else if (activeTab === 1) {
    return <TheProduct />;
  } else if (activeTab === 2) {
    return <TheContent />;
  } else if (activeTab === 3) {
    return <div>Empty 4</div>;
  } else if (activeTab === 4) {
    return <div>Empty 5</div>;
  } else if (activeTab === 5) {
    return <div>Empty 6</div>;
  } else {
    return null;
  }
};

const Campaign = () => {
  const [sliderPos, setSliderPos] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const currentTab = document.querySelector(`.tab-${activeTab}`);
    if (currentTab) {
      const tabPos = currentTab.offsetLeft - 83;
      const width = currentTab.clientWidth + 160;
      setSliderWidth(width);
      setSliderPos(tabPos);
    }
    if (activeTab > 5) {
      setActiveTab(0);
    }
  }, [activeTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={styles["cart-header"]}>
      {/* <div className={styles["cart-header__inner"]}>
        <span
          className={styles["cart-header__slider-span"]}
          style={{
            width: `${sliderWidth}px`,
            transform: `translateX(${sliderPos}px)`,
          }}
        ></span>
        <div className={styles["cart-header__slider"]}></div>
        {[
          "The brand",
          "The product",
          "The content",
          "The creators",
          "The timing",
          "Review",
        ].map((tab, index) => (
          <div
            key={index}
            className={`${styles["cart-header__tabs"]} ${
              activeTab === index ? styles.active : ""
            } tab-${index}`}
            onClick={() => handleTabClick(index)}
          >
            <p className={styles.titles}>{tab}</p>
          </div>
        ))}
      </div>
      <Slider activeTab={activeTab} />
      <button
        className={styles["next-button"]}
        onClick={() => setActiveTab((prevIndex) => prevIndex + 1)}
      >
        <img src={nextBtn} alt="/" />
      </button> */}
    </div>
  );
};

export default Campaign;
