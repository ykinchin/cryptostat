import React, { useEffect, useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";

import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase-config";
import styles from "./styles/coinItem.module.scss";

const CoinItem = ({ coin }) => {
  const [savedCoin, setSavedCoin] = useState(false);
  const [coins, setCoins] = useState();

  const { user } = UserAuth();

  const coinPath = doc(db, "user", `${user?.email}`);

  useEffect(() => {
    onSnapshot(doc(db, "user", `${user?.email}`), (doc) => {
      setCoins(doc.data()?.watchList);
    });
  }, [user?.email]);

  const saveCoin = async () => {
    if (user?.email) {
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          symbol: coin.symbol,
        }),
      });
    } else alert("something went wrong!");
  };

  const removeCoin = async (id) => {
    try {
      const result = coins.filter((item) => item.id !== id);
      await updateDoc(coinPath, {
        watchList: result,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <tr className={styles.tr}>
      <td className={styles.add__btn}>
        {user ? (
          coins?.includes(coins?.find((item) => item.id === coin.id)) ? (
            <AiFillStar onClick={()=>{removeCoin(coin.id)}}/>
          ) : (
            <AiOutlineStar onClick={saveCoin}/>
          )
        ) : null}
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
          <div className={styles.coin}>
            <img className={styles.coin__img} src={coin.image} alt={coin.id} />
            <p className={styles.coin__name}>{coin.name}</p>
          </div>
        </Link>
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td>
        {coin.price_change_percentage_24h > 0 ? (
          <p className={styles.percentage_green}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className={styles.percentage_red}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className={styles.volume__td}>
        ${coin.total_volume.toLocaleString()}
      </td>
      <td className={styles.mkt__td}>${coin.market_cap.toLocaleString()}</td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color='teal' />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
