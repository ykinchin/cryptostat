import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { axiosCoins } from "../store/slices/coinsSlice";
import styles from "./styles/coinSearch.module.scss";
import CoinItem from "./CoinItem";

const CoinSearch = () => {
  const [coinSearch, setCoinSearch] = useState("");

  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.coins);

  useEffect(() => {
    dispatch(axiosCoins());
  }, [dispatch]);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.searchbar}>
          <h1 className={styles.title}>Search coin</h1>
          <form className={styles.form}>
            <input
              type='text'
              placeholder='search coin...'
              className={styles.input}
              onChange={(e) => setCoinSearch(e.target.value)}
            />
          </form>
        </div>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th></th>
              <th className={styles.hash__tr}>#</th>
              <th className={styles.coin__tr}>Coin</th>
              <th></th>
              <th>Price</th>
              <th>24h</th>
              <th className={styles.volume__tr}>24h Volume</th>
              <th className={styles.mkt__tr}>Mkt</th>
              <th>Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {coins
              // eslint-disable-next-line array-callback-return
              .filter((value) => {
                if (coinSearch === "") {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(coinSearch.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((coin) => {
                return <CoinItem coin={coin} key={coin.id} />;
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CoinSearch;
