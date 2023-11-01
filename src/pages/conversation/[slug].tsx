import { useRouter } from "next/router";
import { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreateMessage, actionGetMessages } from "../../store/thunks";
import { AppDispatch, RootState } from "../../store/store";
import styles from "../../styles/MessagesList.module.css";
import Message from "../../components/Message/Message";
import MessageMe from "../../components/Message/MessageMe";
import { getLoggedUserId } from "../../utils/getLoggedUserId";
import { actionSetinputValue } from "../../store/actions";
import Loader from "../../components/Loader/Loader";
import Delete from "../../components/Delete/Delete";
import Link from "next/link";
import Error from "../../components/Error/Error";

export default function Page() {
  let idConv: number;
  const router = useRouter();
  const slug = router.query.slug;
  if (typeof slug === "string") {
    idConv = parseInt(slug);
  }
  const myId = getLoggedUserId();
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
  const conversations = useSelector(
    (state: RootState) => state.reducerMessages.conversations
  );
  let author: string;
  const deletedIsOnError = useSelector(
    (state: RootState) => state.reducerMessages.deleteIsOnError
  );

  // get the name of the other member of the conversation
  conversations.forEach((conversation) => {
    if (conversation.id === idConv) {
      if (myId === conversation.recipientId) {
        author = conversation.senderNickname;
      }
      if (myId === conversation.senderId) {
        author = conversation.recipientNickname;
      }
    }
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (typeof router.query.slug === "string") {
      dispatch(actionCreateMessage(router.query.slug));
    }
  };

  useEffect(() => {
    if (typeof router.query.slug === "string") {
      dispatch(actionGetMessages(router.query.slug));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.messages__container}>
      {deletedIsOnError && (
        <Error content='Impossible de supprimer le message veuillez réessayer ultérieurement.' />
      )}
      <div className={styles.messages__subcontainer}>
        <div className={styles.messages__container_header}>
          <Link href='/'>
            <span className={styles.messages__container_back}>Retour</span>
          </Link>
          <span className={styles.messages__container_title}>
            Conversation avec {author}
          </span>
        </div>
        <div className={styles.messages__container_messages}>
          {loaded ? (
            messages.map((message) =>
              myId === message.authorId ? (
                <div key={message.id} className={styles.messages__me}>
                  <MessageMe {...message} />
                  <Delete id={message.id} />
                </div>
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
