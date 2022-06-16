import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosTrending } from "../store/slices/trendingSlice";

import styles from "./styles/trending.module.scss";

const Trending = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axiosTrending());
  }, [dispatch]);

  const trending = useSelector((state) => state.trending.trending);

  return (
    <div className={styles.trending}>
      <h1 className={styles.title}>Trending Coins</h1>
      <div className={styles.grid__container}>
        {trending.map((coin) => {
          return (
            <div className={styles.flex__container} key={coin.item.id}>
              <div className={styles.coin__wrapper}>
                <div className={styles.coin}>
                  <img className={styles.img} src={coin.item.small} alt='/' />
                  <div className={styles.coin__info}>
                    <p className={styles.name}>{coin.item.name}</p>
                    <p className={styles.symbol}>{coin.item.symbol}</p>
                  </div>
                </div>
                <div className={styles.btc}>
                  <img
                    className={styles.btc__img}
                    src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
                    alt='/'
                  />
                  <p>{coin.item.price_btc.toFixed(7)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
