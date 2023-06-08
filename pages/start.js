import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/Start.module.css";

export default function Start() {
  return (
    <div className={styles.background}>
      <NavBar></NavBar>
      <div className={styles.start}>
        <h1>Start</h1>
      </div>
    </div>
  );
}
