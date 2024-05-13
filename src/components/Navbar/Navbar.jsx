import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";
import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/logo2.png";
import Button from "../Button/Button";
import MenuIcon from "../MenuIcon/MenuIcon";

const Navbar = () => {
  const location = useLocation();
  const lastPath = location.pathname.split("/").pop();
  const additionalClass = styles.additionalClass;

  const navigate = useNavigate();

  return (
    <nav
      className={`${styles.navbar} ${
        lastPath === "campaign" && additionalClass
      }`}
    >
      <img
        src={lastPath === "campaign" ? logo : logo}
        alt="logo"
        onClick={() => navigate("/")}
      />
      {lastPath !== "campaign" && (
        <ul>
          <Link to={"/"}>Case Studies</Link>
          <Link to={"/"}>Locations</Link>
          <Link to={"/creator"}>Creators</Link>
          <Button transparent onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button>Join Us</Button>
        </ul>
      )}
      <MenuIcon />
    </nav>
  );
};

export default Navbar;
