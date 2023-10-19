import type { ReactElement } from "react";
import styles from "../styles/Home.module.css";
import MessagesList from "../components/MessagesList/MessagesList";

const Home = (): ReactElement => {
  const year = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <h1>Hello</h1>
      <MessagesList />
    </div>
  );
};

export default Home;
