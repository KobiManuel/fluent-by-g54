import React, { useEffect, useRef, useState } from "react";
import Button from "../../../components/Button/Button";
import Arrow from "../../../assets/Icons/arrow-right.svg?react";
import styles from "./_Main.module.scss";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import variant1 from "../../../assets/images/variant1.png";
import variant2 from "../../../assets/images/variant2.png";
import variant3 from "../../../assets/images/variant3.png";

const CreativesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState({
    v1: 20,
    v2: 0,
    v3: 0,
  });

  const { v1, v2, v3 } = progress;
  const data = [
    {
      number: "01.",
      title: "Calling All Creatives",
    },
    {
      number: "02.",
      title: "Influencers with Followers",
    },
    {
      number: "03.",
      title: "Engagement-Driven Influencers",
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.9,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(entry.isIntersecting);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const target = containerRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  useEffect(() => {
    let firstInterval;

    if (isVisible && (v1 && v2 && v3) < 100) {
      document.body.style.overflow = "hidden";

      // firstInterval = setInterval(() => {
      //   if (v1 < 100) setProgress((prev) => ({ ...prev, v1: v1 + 10 }));
      //   else if (v1 >= 100 && v2 < 100)
      //     setProgress((prev) => ({ ...prev, v2: v2 + 10 }));
      //   else if (v1 >= 100 && v2 >= 100 && v3 < 100)
      //     setProgress((prev) => ({ ...prev, v3: 100 }));
      //   else {
      //     clearInterval(firstInterval);
      //   }
      // }, 300);

      // return () => clearInterval(firstInterval);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isVisible, v1, v2, v3]);

  function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
      const context = this;
      const args = arguments;

      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  let scrollCount = 0;
  useEffect(() => {
    let scrollCount = 0;

    const handleScroll = () => {
      const bodyOverflow = document.body.style.overflow;
      if (bodyOverflow === "hidden") {
        scrollCount++;

        console.log("Scroll count:", scrollCount);

        if (scrollCount === 1) {
          setProgress((prev) => ({ ...prev, v1: 100, v2: 20 }));
        }
        if (scrollCount === 2) {
          setProgress((prev) => ({ ...prev, v2: 100, v3: 20 }));
        }
        if (scrollCount === 3) {
          setProgress((prev) => ({ ...prev, v3: 100 }));
        }
      }
    };

    const debounceScroll = debounce(handleScroll, 200);

    window.addEventListener("wheel", debounceScroll);

    return () => {
      window.removeEventListener("wheel", debounceScroll);
    };
  }, [scrollCount]);

  // console.log("this is", progress);

  return (
    <section className={styles.main} ref={containerRef}>
      <div className={styles["main-top"]}>
        <h3>Got what it takes?</h3>
        <Button primary size={"fit-content"}>
          Join as a creator <Arrow />
        </Button>
      </div>
      <div className={styles["main-bottom"]}>
        <div className={styles["img-container"]}>
          <img
            className={styles.left}
            src={variant1}
            alt="/"
            style={{
              transform: v1 >= 100 && `translateX(-100%)`,
            }}
          />
          <img
            className={styles.left}
            src={variant2}
            style={{
              transform: v2 >= 100 && `translateX(-200%)`,
              opacity: v1 >= 100 && 1,
            }}
            alt="/"
          />
          <img
            className={styles.left}
            src={variant3}
            style={{
              opacity: v2 >= 100 && 1,
            }}
          />
        </div>
        <div className={styles.right}>
          {data.map((item, index) => (
            <div key={index} className={styles["progress-card"]}>
              <span>
                <h6>{item.number}</h6>
                <h6>{item.title}</h6>
              </span>
              <ProgressBar
                progress={`${progress[`v${index + 1}`]}%`}
                className={`${styles[`progress-${index + 1}`]}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativesSection;
