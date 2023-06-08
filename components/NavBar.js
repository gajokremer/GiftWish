// import { data } from "autoprefixer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/NavBar.module.css";

const NavBar = (data) => {
  console.log("NavBar");
  // console.log(user);

  const { data: user } = data;
  console.log(user);

  const encodedUser = encodeURIComponent(JSON.stringify(user));

  return (
    <div className={styles.navbarBackground}>
      <div className={styles.navbar}>
        <div className={styles.titleBox}>
          <Link href={"/"}>
            <h1 className={styles.title}>GiftWish</h1>
          </Link>
        </div>
        <div className={styles.cartContainer}>
          <Link href={"/cart"}>
            <Image
              src="/images/cart.png"
              alt="Cart"
              className={styles.cart}
              width={80} // Increase the width of the image
              height={80} // Increase the height of the image
            />
          </Link>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuItem}>Catalog</div>
          <div className={styles.menuItem}>Wishlist</div>
        </div>
        <div className={styles.username}>
          {/* <Link href={`/profile?user=${encodedUser}`}> */}
          <Link href={{ pathname: "/profile", query: { user: encodedUser } }}>
            <span>Username</span>
          </Link>
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
