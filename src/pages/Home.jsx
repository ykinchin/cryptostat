import React from "react";

import CoinSearch from "../components/CoinSearch";
import Trending from "../components/Trending";
import styles from "./styles/home.module.scss";

const Home = () => {
  return (
    <div className={styles.a}>
      <CoinSearch  />
      <Trending/>
    </div>
  );
};

export default Home;
