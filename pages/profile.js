import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/Profile.module.css";

export default function Profile() {
  // const router = useRouter();
  // const { user: encodedUser } = router.query;

  // // const user = encodedUser ? JSON.parse(decodeURIComponent(encodedUser)) : null;

  // let user = null;
  // if (encodedUser) {
  //   try {
  //     user = JSON.parse(decodeURIComponent(encodedUser));
  //   } catch (error) {
  //     console.error("Error parsing user JSON:", error);
  //   }
  // }

  // console.log(user);

  // if (user === null) {
  //   return <div>Invalid user</div>;
  // }

  return (
    <>
      <div className={styles.background}>
        {/* <NavBar></NavBar> */}
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
              <h1 className={styles.userProfileName}>{`johndoe1990`}</h1>
              <div className={styles.userProfileInfo}>
                <p>Full Name: {`John Doe`}</p>
                <p>Age: {`30`}</p>
                <p>Birth Date: {`Jan/01/1990`}</p>
              </div>
              <h1 className={styles.userProfileTitle}>User details</h1>
              <div className={styles.userProfileInfo}>
                <p>Email: {`johndoe1990@gmail.com`}</p>
                <p>Company: {`Apple`}</p>
                <p>Role: {`Software Engineer`}</p>
              </div>
              {/* Agrega más detalles del usuario aquí */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
