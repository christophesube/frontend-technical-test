import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetMessages } from "../../store/thunks";
import { AppDispatch, RootState } from "../../store/store";
import styles from "../../styles/MessagesList.module.css";
import Message from "../../components/Message/Message";
import MessageMe from "../../components/Message/MessageMe";
import { getLoggedUserId } from "../../utils/getLoggedUserId";

export default function Page() {
  const router = useRouter();
  const slug = parseInt(router.query.slug);
  const dispatch = useDispatch() as AppDispatch;
  const messages = useSelector(
    (state: RootState) => state.reducerMessages.messages
  );
  const loaded = useSelector(
    (state: RootState) => state.reducerMessages.messagesAreLoaded
  );
  const myId = getLoggedUserId();
  useEffect(() => {
    dispatch(actionGetMessages(router.query.slug));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(slug);
  return (
    <div className={styles.messages__container}>
      <div className={styles.messages__subcontainer}>
        <div className={styles.messages__container_header}>
          <span>Jane Doe - You</span>
          <span>Last message : today at 2:45pm</span>
        </div>
        <div className={styles.messages__container_messages}>
          {loaded
            ? messages.map((message) =>
                myId === message.authorId ? (
                  <MessageMe key={message.id} {...message} />
                ) : (
                  <Message key={message.id} {...message} />
                )
              )
            : "non chargé"}
        </div>
      </div>
      <form className={styles.messages__form} action='#'>
        <input type='text' placeholder='Entrez votre message' />
        <button type='button'>Envoyer</button>
      </form>
    </div>
  );
}
