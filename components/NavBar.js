import Link from "next/link";
import React from "react";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.titleBox}>
        <Link href={"/"}>
          <h1 className={styles.title}>GiftWish</h1>
        </Link>
      </div>
      <div className={styles.menu}>
        <div className={styles.menuItem}>Catalog</div>
        <div className={styles.menuItem}>Wishlist</div>
        <div className={styles.menuItem}>Cart</div>
      </div>
      <div className={styles.username}>Username</div>
    </div>
  );
};

export default NavBar;
