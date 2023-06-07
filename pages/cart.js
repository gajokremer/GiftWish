import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/Cart.module.css";

export default function Cart() {
  return (
    <div className={styles.background}>
      <NavBar></NavBar>
      <h1>Cart</h1>
    </div>
  );
}
