import { useEffect, type ReactElement } from "react";
import styles from "../styles/Home.module.css";
import ConversationsList from "../components/ConversationsList/ConversationsList";
import { useDispatch } from "react-redux";
import { actionGetConversations } from "../store/thunks";
import { AppDispatch } from "../store/store";

const Home = (): ReactElement => {
  const year = new Date().getFullYear();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetConversations());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <h1>Hello</h1>
      <ConversationsList />
    </div>
  );
};

export default Home;
