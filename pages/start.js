import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/Start.module.css";

export default function Start() {
  const user = {
    username: "johndoe1990",
    fullName: "John Doe",
    age: 33,
    birthDate: "Jan/01/1990",
    email: "johndoe1990@gmail.com",
    company: "Apple",
    role: "Software Engineer",
  };

  return (
    <div className={styles.background}>
      <NavBar data={user}></NavBar>
      <div className={styles.start}>
        <h1>Start</h1>
      </div>
    </div>
  );
}
