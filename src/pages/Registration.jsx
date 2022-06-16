import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";
import styles from "./styles/logreg.module.scss";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = UserAuth();

  const navigate = useNavigate();

  const signupHandler = async () => {
    try {
      await signUp(email, password);
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Sign Up</h1>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor='login'>
              Email
            </label>
            <input
              className={styles.input}
              type='text'
              value={email}
              id='login'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor='password'>
              Password
            </label>
            <input
              className={styles.input}
              type='password'
              value={password}
              id='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={styles.btn} onClick={signupHandler}>
            Sign up
          </button>
          <div className={styles.link}>
            Already have an account? <Link to='/login'>Log in</Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Registration;
