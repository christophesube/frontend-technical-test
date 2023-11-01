import { useSelector } from "react-redux";
import styles from "../../styles/Message.module.css";
import { Message } from "../../types/message";
import { RootState } from "../../store/store";
import { useRouter } from "next/router";

const Message = (message: Message) => {
  const router = useRouter();
  let idConv: number;
  const slug = router.query.slug;
  if (typeof slug === "string") {
    idConv = parseInt(slug);
  }
  const conversations = useSelector(
    (state: RootState) => state.reducerMessages.conversations
  );
  let author: string;
  conversations.forEach((conversation) => {
    if (conversation.id === idConv) {
      if (message.authorId === conversation.recipientId) {
        author = conversation.recipientNickname;
      }
      if (message.authorId === conversation.senderId) {
        author = conversation.senderNickname;
      }
    }
  });

  return (
    <div className={styles.message__container}>
      <span className={styles.message__author}>{author}</span>
      <p className={styles.message__body}>{message.body}</p>
    </div>
  );
};

export default Message;
