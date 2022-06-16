import React from "react";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

import styles from "./styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.menu__left}>
          <ul className={styles.list}>
            <li className={styles.title}>SUPPORT</li>
            <li>HELP CENTER</li>
            <li>CONTACT US</li>
            <li>API STATUS</li>
            <li>DOCUMENTATION</li>
          </ul>
          <ul className={styles.list}>
            <li className={styles.title}>INFO</li>
            <li>ABOUT US</li>
            <li>CAREERS</li>
            <li>INVEST</li>
            <li>LEGAL</li>
          </ul>
        </div>
        <div className={styles.menu__right}>
          <p>Sign up for crypto news</p>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input className={styles.input} type='text' placeholder="Enter your email" />
            <button className={styles.btn}>Sign up</button>
          </form>
          <ul className={styles.socials}>
            <li>
              <AiFillGithub />
            </li>
            <li>
              <AiOutlineInstagram />
            </li>
            <li>
              <AiOutlineLinkedin />
            </li>
            <li>
              <AiOutlineTwitter />
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.powered}>Powered by Coin Gecko</p>
    </footer>
  );
};

export default Footer;
