import React, { useEffect, useState } from "react";
import styles from "../_Main.module.scss";
import { useLocation } from "react-router-dom";

const TheBrand = () => {
  const [checked, setChecked] = useState(false);
  const [brandName, setBrandName] = useState("");

  const location = useLocation();
  const lastPath = location.pathname.split("/").pop();

  const hasSetBrandName =
    window.location.pathname.split("/").pop() === brandName;

  //   useEffect(() => {
  //     let isDomain = window.location.pathname === "/campaign";
  //     if (isDomain && hasSetBrandName) {
  //       window.history.pushState(
  //         null,
  //         "",
  //         window.location.pathname + "/" + brandName
  //       );
  //     }
  //   }, [brandName, hasSetBrandName]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      window.history.pushState(
        null,
        "",
        window.location.pathname + "/" + brandName
      );
    }
  };

  console.log(window.location.pathname.split("/").pop());
  console.log(hasSetBrandName);

  return (
    <div className={styles.brand} onKeyPress={handleKeyPress} tabIndex="0">
      <div className={styles["brand-inner"]}>
        {hasSetBrandName ? (
          <>
            <header>
              <h3 onClick={() => setBrandName("yes")}>
                Hey {brandName}! tell us about your brand
              </h3>
            </header>
            <form>
              <textarea placeholder="Briefly describe what you do" />
            </form>
          </>
        ) : brandName === "yes" ? (
          <img
            className={styles["describe-brand"]}
            src={describeBrand}
            alt="/"
          />
        ) : (
          <>
            <header>
              <h3>Let's get you started</h3>
              <p>This will be your dashboard login</p>
            </header>
            <form>
              <input
                type="text"
                placeholder="Brand name"
                onChange={(e) => setBrandName(e.target.value)}
              />
              <input type="email" placeholder="Email" />
              <input type="url" placeholder="Website" />
            </form>
            <div className={styles["checkbox-container"]}>
              <p className={checked ? styles.active : ""}>
                I agree to the terms and conditions
              </p>
              <span
                onClick={() => setChecked(!checked)}
                className={`${styles.icon} ${checked ? styles.checked : ""}`}
              >
                {checked ? (
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_403_3015)">
                      <path
                        d="M22.3188 4.43101L8.49985 18.249C8.40694 18.3423 8.29652 18.4163 8.17494 18.4668C8.05336 18.5173 7.923 18.5433 7.79135 18.5433C7.65969 18.5433 7.52933 18.5173 7.40775 18.4668C7.28617 18.4163 7.17576 18.3423 7.08285 18.249L1.73885 12.9C1.64594 12.8067 1.53552 12.7327 1.41394 12.6822C1.29236 12.6317 1.162 12.6057 1.03035 12.6057C0.898693 12.6057 0.768335 12.6317 0.646752 12.6822C0.52517 12.7327 0.414756 12.8067 0.321847 12.9C0.22857 12.9929 0.154557 13.1033 0.104056 13.2249C0.053554 13.3465 0.0275574 13.4769 0.0275574 13.6085C0.0275574 13.7402 0.053554 13.8705 0.104056 13.9921C0.154557 14.1137 0.22857 14.2241 0.321847 14.317L5.66785 19.662C6.23179 20.2249 6.99604 20.5411 7.79285 20.5411C8.58965 20.5411 9.3539 20.2249 9.91785 19.662L23.7358 5.84701C23.829 5.75412 23.9029 5.64377 23.9533 5.52228C24.0037 5.40079 24.0296 5.27054 24.0296 5.13901C24.0296 5.00747 24.0037 4.87723 23.9533 4.75574C23.9029 4.63425 23.829 4.5239 23.7358 4.43101C23.6429 4.33773 23.5325 4.26372 23.4109 4.21322C23.2894 4.16272 23.159 4.13672 23.0273 4.13672C22.8957 4.13672 22.7653 4.16272 22.6438 4.21322C22.5222 4.26372 22.4118 4.33773 22.3188 4.43101Z"
                        fill="#374957"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_403_3015">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  ""
                )}
              </span>
            </div>
            <div className={styles["links-container"]}>
              <span>
                already registered? <a>sign in here</a>
              </span>
              <span>
                or <a>sign up as a creator</a>
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TheBrand;
