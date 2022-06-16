import React from "react";
import SavedCoin from "../components/SavedCoin";

import styles from "./styles/account.module.scss";
import { UserAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const Account = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();


  const onLogoutHadler = () => {
    logOut().then(navigate("/")).catch(console.error());
  };

if (user) {   return (
    <div className={styles.account}>
      <div className={styles.title}>
        <h1>Welcome, {user?.email}</h1>
        <button className={styles.btn} onClick={onLogoutHadler}>
          Sign Out
        </button>
      </div>
      <div className={styles.coins}>
        <h2>Watch List</h2>
        <SavedCoin />
      </div>
    </div>
  )} else {
    return <Navigate to='/login'/>
  }


};

export default Account;
