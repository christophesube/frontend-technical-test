import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreateMessage, actionGetMessages } from "../../store/thunks";
import { AppDispatch, RootState } from "../../store/store";
import styles from "../../styles/MessagesList.module.css";
import Message from "../../components/Message/Message";
import MessageMe from "../../components/Message/MessageMe";
import { getLoggedUserId } from "../../utils/getLoggedUserId";
import { actionSetinputValue } from "../../store/actions";
import Loader from "../../components/Loader/Loader";

export default function Page() {
  const router = useRouter();
  const myId = getLoggedUserId();
  const slug = parseInt(router.query.slug);
  const dispatch = useDispatch() as AppDispatch;
  const messages = useSelector(
    (state: RootState) => state.reducerMessages.messages
  );
  const loaded = useSelector(
    (state: RootState) => state.reducerMessages.messagesAreLoaded
  );
  const inputValue = useSelector(
    (state: RootState) => state.reducerMessages.inputValue
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actionCreateMessage(router.query.slug));
  };

  useEffect(() => {
    dispatch(actionGetMessages(router.query.slug));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.messages__container}>
      <div className={styles.messages__subcontainer}>
        <div className={styles.messages__container_header}>
          <span>Jane Doe - You</span>
          <span>Last message : today at 2:45pm</span>
        </div>
        <div className={styles.messages__container_messages}>
          {loaded ? (
            messages.map((message) =>
              myId === message.authorId ? (
                <MessageMe key={message.id} {...message} />
              ) : (
                <Message key={message.id} {...message} />
              )
            )
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <form
        className={styles.messages__form}
        action='#'
        onSubmit={handleSubmit}>
        <input
          onChange={(event) =>
            dispatch(actionSetinputValue(event.target.value))
          }
          value={inputValue}
          type='text'
          placeholder='Entrez votre message'
        />
        <button type='submit'>Envoyer</button>
      </form>
    </div>
  );
}
