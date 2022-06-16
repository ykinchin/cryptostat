import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import styles from "./app.module.scss";
import { routes } from "./router/routes";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const routesList = routes.map((route) => {
    return (
      <Route
        path={route.path}
        element={route.element}
        key={Date.now() + Math.random()}
      />
    );
  });
  return (
    <AuthContextProvider>
      <div className={styles.app}>
        <Navbar />
        <Routes>{routesList}</Routes>
        <Footer />
      </div>
    </AuthContextProvider>
  );
}

export default App;
