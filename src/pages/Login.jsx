import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";
import styles from "./styles/logreg.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { signIn } = UserAuth();

  const signinHandler = async () => {
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Sign In</h1>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor='email'>
              Email
            </label>
            <input
              className={styles.input}
              type='text'
              onChange={(e) => setEmail(e.target.value)}
              id='email'
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor='password'>
              Password
            </label>
            <input
              className={styles.input}
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              id='password'
            />
          </div>
          <button className={styles.btn} onClick={signinHandler}>
            Sign in
          </button>
          <div className={styles.link}>
            Don't have an account? <Link to='/registration'>Sign Up</Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
