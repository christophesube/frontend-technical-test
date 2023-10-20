import styles from "../../styles/Message.module.css";
import { Message } from "../../types/message";
import { getLoggedUserId } from "../../utils/getLoggedUserId";

const Message = (message: Message) => {
  return (
    <div className={styles.message__container}>
      <span className={styles.message__author}>{message.authorId}</span>
      <p className={styles.message__body}>{message.body}</p>
    </div>
  );
};

export default Message;
