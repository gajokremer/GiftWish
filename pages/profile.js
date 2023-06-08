import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/Profile.module.css";

export default function Profile() {
  return (
    <>
      <div className={styles.background}>
        {/* <NavBar /> */}
        <div>
          <Link href={"/start"}>
            <button className={styles.button}>Back</button>
          </Link>
        </div>
        <div className={styles.profile}>
          <div className={styles.userProfile}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/profilePicture.jpeg"
                alt="User Profile image"
                className={styles.userProfileImage}
                width={200} // Increase the width of the image
                height={200} // Increase the height of the image
              />
            </div>
            <div className={styles.userInfo}>
              <h1 className={styles.userProfileName}>Nombre del Usuario</h1>
              <div className={styles.userProfileInfo}>
                <p>Información básica del usuario</p>
                <h2 className={styles.userProfileTitle}>
                  Detalles del Usuario
                </h2>
                <p className={styles.userProfileDetail}>
                  Correo electrónico: usuario@example.com
                </p>
                <p className={styles.userProfileDetail}>
                  Fecha de nacimiento: 1 de enero de 1990
                </p>
                {/* Agrega más detalles del usuario aquí */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
