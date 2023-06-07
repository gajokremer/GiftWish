import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Gift App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
        <div className={`${styles.shape} ${styles.shape4}`}></div>
        <div className={`${styles.shape} ${styles.shape5}`}></div>
        <div className={`${styles.shape} ${styles.shape6}`}></div>
        <div className={`${styles.shape} ${styles.shape7}`}></div>
        <div className={`${styles.shape} ${styles.shape8}`}></div>
        <div className={`${styles.shape} ${styles.shape9}`}></div>
        <div className={`${styles.shape} ${styles.shape10}`}></div>
        <div className={`${styles.shape} ${styles.shape11}`}></div>
        <div className={`${styles.shape} ${styles.shape12}`}></div>
        <div className={`${styles.shape} ${styles.shape13}`}></div>
        <div className={`${styles.shape} ${styles.shape14}`}></div>
        <div className={`${styles.shape} ${styles.shape15}`}></div>

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to the Gift App</h1>
          <p className={styles.description}>
            Start finding the perfect gifts for your loved ones!
          </p>

          <Link href="/home">
            <button className={styles.button}>Start</button>
          </Link>
        </main>

        {/* <footer className={styles.footer}>
          <p>Powered by Next.js</p>
        </footer> */}
      </div>
    </div>
  );
}
