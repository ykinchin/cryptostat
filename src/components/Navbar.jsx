import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";

import styles from "./styles/navbar.module.scss";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isToggleOpened, setIsToggleOpened] = useState(false);

  const navigate = useNavigate();

  const { user, logOut } = UserAuth();

  const toggleHandler = () => {
    setIsToggleOpened(!isToggleOpened);
  };

  const onLogoutHadler = () => {
    logOut().then(navigate("/")).catch(console.error());
  };

  return (
    <nav className={styles.navbar}>
      <Link to='/'>
        <h1 className={styles.title}>CryptoStat</h1>
      </Link>

      {user ? (
        <div className={styles.account__auth}>
          <Link to='/account'>
            {user.email?.split('@')[0]}'s <span>coins</span>
          </Link>
          <p onClick={onLogoutHadler}>
            <GrLogout size={22} />
          </p>
        </div>
      ) : (
        <div className={styles.account}>
          <Link to='/login'>Sign In</Link>
          <Link to='/registration'>Sign Up</Link>
        </div>
      )}

      <div className={styles.toggle} onClick={toggleHandler}>
        {isToggleOpened ? (
          <AiOutlineClose size={22} />
        ) : (
          <AiOutlineMenu size={22} />
        )}
      </div>

      {/* Mobile menu */}

      <div className={isToggleOpened ? styles.mobile : styles.mobile__hidden}>
        <ul
          className={styles.list}
          onClick={() => {
            setIsToggleOpened(false);
          }}
        >
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/account'>
            <li>Account</li>
          </Link>
        </ul>

        {user ? (
          <div className={styles.logout} onClick={onLogoutHadler}>
            <p>Log Out</p>
            <GrLogout size={22} className={styles.icon} />
          </div>
        ) : (
          <div className={styles.mobile__account}>
            <Link to='/login' onClick={toggleHandler}>
              Sign In
            </Link>
            <Link to='/registration' onClick={toggleHandler}>
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
