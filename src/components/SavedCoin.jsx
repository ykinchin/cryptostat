import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

import { db } from "../firebase-config";
import { UserAuth } from "../context/AuthContext";
import styles from "./styles/savedCoin.module.scss";

const SavedCoin = () => {
  const [coins, setCoins] = useState([]);
  const { user } = UserAuth();

  const coinPath = doc(db, "user", `${user?.email}`);

  useEffect(() => {
    onSnapshot(doc(db, "user", `${user?.email}`), (doc) => {
      setCoins(doc.data()?.watchList);
    });
  }, [user?.email]);

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
    <div className={styles.wrapper}>
      {coins.length === 0 ? (
        <p>
          You don't have any coins saved. Please save a coin to add it to your
          watch list. <Link to='/'>Click here to search coins.</Link>
        </p>
      ) : (
        <div className={styles.coins}>
          {coins.map((coin) => {
            return (
              <div key={coin.id} className={styles.coin}>
                <Link className={styles.coin__link} to={`/coin/${coin.id}`}>
                  <img className={styles.img} src={coin?.image} alt='/' />
                  <div className={styles.title}>
                    <h1 className={styles.name}>{coin?.name}</h1>
                    <p>{coin?.symbol.toUpperCase()}</p>
                  </div>
                </Link>
                <AiOutlineClose
                  onClick={()=>removeCoin(coin.id)}
                  className={styles.close__btn}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SavedCoin;
