import React from "react";
import styles from "./_Main.module.scss";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles["login-inner"]}>
        <div className={styles["login-inner__top"]}>
          <h3>Log in to your account</h3>
          <Input placeholder={"email"} />
        </div>
        <div className={styles["login-inner__bottom"]}>
          <button>Login</button>
          <div className={styles["links-container"]}>
            <span>
              don’t have an account? join as a creator{" "}
              <Link to="/creator">here</Link>
            </span>
            <span>
              or join as a brand and get started on your first campaign {""}
              <Link to="/campaign" target="_self">
                {" "}
                here
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
