import type { ReactElement } from "react";
import Head from "next/head";
import Image from "next/image";
import Logo from "../assets/lbc-logo.webp";
import styles from "../styles/Home.module.css";

const Home = (): ReactElement => {
  const year = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <h1>Hello</h1>
    </div>
  );
};

export default Home;
