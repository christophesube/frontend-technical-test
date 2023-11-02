import { useEffect, type ReactElement } from "react";
import styles from "../styles/Home.module.css";
import ConversationsList from "../components/ConversationsList/ConversationsList";
import Error from "../components/Error/Error";
import { useDispatch, useSelector } from "react-redux";
import { actionGetAllUsers, actionGetConversations } from "../store/thunks";
import { AppDispatch, RootState } from "../store/store";
import Loader from "../components/Loader/Loader";
import CreateConversation from "../components/CreateConversation/CreateConversation";

const Home = (): ReactElement => {
  const dispatch = useDispatch() as AppDispatch;
  const conversationAreLoaded = useSelector(
    (state: RootState) => state.reducerMessages.conversationsAreLoaded
  );
  const isLoading = useSelector(
    (state: RootState) => state.reducerMessages.conversationsisLoading
  );

  useEffect(() => {
    dispatch(actionGetConversations());
    dispatch(actionGetAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.conversationsContainer}>
          {!conversationAreLoaded && (
            <Error content='Erreur durant le chargement. Veuillez rafraichir votre page.' />
          )}
          {isLoading && <Loader />}
          {conversationAreLoaded && !isLoading && <ConversationsList />}
        </div>
        {conversationAreLoaded ? <CreateConversation /> : null}
      </div>
    </div>
  );
};

export default Home;
