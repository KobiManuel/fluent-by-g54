import React from "react";
import styles from "./_Main.module.scss";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero/Main";
import CreativesSection from "./CreativesSection/Main";

const Creator = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.creator}>
      <Hero />
      <CreativesSection />
    </section>
  );
};

export default Creator;
