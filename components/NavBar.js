import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbarBackground}>
      <div className={styles.navbar}>
        <div className={styles.titleBox}>
          <Link href={"/"}>
            <h1 className={styles.title}>GiftWish</h1>
          </Link>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuItem}>Catalog</div>
          <div className={styles.menuItem}>Wishlist</div>
          <Link href={"/cart"}>
            <div className={styles.menuItem}>Cart</div>
          </Link>
        </div>
        <div className={styles.username}>
          <span>Username</span>
          <Image
            src="/images/profilePicture.jpeg"
            alt="User Avatar"
            className={styles.avatar}
            width={80} // Increase the width of the image
            height={80} // Increase the height of the image
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
