import { useEffect, type ReactElement } from "react";
import styles from "../styles/Home.module.css";
import ConversationsList from "../components/ConversationsList/ConversationsList";
import { useDispatch, useSelector } from "react-redux";
import { actionGetAllUsers, actionGetConversations } from "../store/thunks";
import { AppDispatch, RootState } from "../store/store";
import Loader from "../components/Loader/Loader";
import CreateConversation from "../components/CreateConversation/CreateConversation";

const Home = (): ReactElement => {
  const year = new Date().getFullYear();
  const dispatch: AppDispatch = useDispatch();
  const conversationAreLoaded = useSelector(
    (state: RootState) => state.reducerMessages.conversationsAreLoaded
  );

  useEffect(() => {
    dispatch(actionGetConversations());
    dispatch(actionGetAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      {conversationAreLoaded ? <ConversationsList /> : <Loader />}
      <CreateConversation />
    </div>
  );
};

export default Home;
