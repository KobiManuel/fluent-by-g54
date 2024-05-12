import React from "react";
import styles from "./_Main.module.scss";
import { useNavigate } from "react-router-dom";

const Creator = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.creator}>
      <div className={styles["creator-inner"]}>
        <h3>Are you a creator? join us!</h3>
        <button onClick={() => navigate("/creator-account/setup")}>
          Join as a creator
        </button>
        {/* <div className={styles["image-section"]}>
          <div>
            <img src={img1} alt="/" />
            <h6>Creative</h6>
            <p>
              We love micro influencers with a unique creative vision and a
              dedication to high-quality content.
            </p>
          </div>
          <div>
            <img src={img2} alt="/" />
            <h6>following</h6>
            <p>
              We partner with micro influencers who have built a personal
              following the 1-50k range.
            </p>
          </div>
          <div>
            <img src={img1} alt="/" />
            <h6>engagement</h6>
            <p>
              We look for micro influencers who have a dedicated following and
              the engagement to prove it.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Creator;
