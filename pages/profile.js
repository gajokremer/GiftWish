import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/Profile.module.css";

export default function Profile() {
  const router = useRouter();
  const { user: encodedUser } = router.query;

  let user = null;
  if (encodedUser) {
    try {
      user = JSON.parse(decodeURIComponent(encodedUser));
    } catch (error) {
      console.error("Error parsing user JSON:", error);
    }
  }

  console.log(user);

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
          {user && (
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
                <h1 className={styles.userProfileName}>{user.username}</h1>
                <div className={styles.userProfileInfo}>
                  <p>Full Name: {`${user.fullName}`}</p>
                  <p>Age: {user.age}</p>
                  <p>Birth {user.birthDate}</p>
                </div>
                <h1 className={styles.userProfileTitle}>User details</h1>
                <div className={styles.userProfileInfo}>
                  <p>Email: {user.email}</p>
                  <p>Company: {user.company}</p>
                  <p>Role: {user.role}</p>
                </div>
                {/* Agrega más detalles del usuario aquí */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
