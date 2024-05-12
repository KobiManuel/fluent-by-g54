import React from "react";
import styles from "./_Main.module.scss";
import Navbar from "../../../components/Navbar/Navbar";
import car from "../../../assets/images/car@4x.webp";
import dance from "../../../assets/images/dance@4x.webp";
import blowout from "../../../assets/images/blowout@4x.webp";
import hair from "../../../assets/images/hair@4x.webp";
import lens from "../../../assets/images/lens@4x.webp";
import reiki from "../../../assets/images/reiki@4x.webp";
import { useNavigate } from "react-router-dom";
import { FLUENT_PAGES } from "../../../utils/globalExports";

const images = [
  car,
  dance,
  blowout,
  hair,
  lens,
  reiki,
  car,
  dance,
  blowout,
  hair,
  lens,
  reiki,
];

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.hero}>
      <header>
        <h3>The Niche Platform For Brands and Storytelling</h3>
        <h6>
          We're Fluent, a creator powered video marketplace for modern startup
          teams. Grow revenue for your business using Tiktoks and Reels made by
          creators.
          {/* We're Fluent, a fully-managed platform that pairs brands with micro
          influencer creators who produce user generated content. */}
        </h6>
        <div className={styles.explore}>
          <button onClick={() => navigate(FLUENT_PAGES.campaign)}>
            Start a campaign
          </button>
          No credit card needed
        </div>
      </header>
      <figure className={styles.imagesContainer}>
        <div>
          {images.map((image, index) => (
            <>
              <img key={index} src={image} alt={`Image ${index}`} />
            </>
          ))}
        </div>
      </figure>
    </section>
  );
};

export default Hero;
