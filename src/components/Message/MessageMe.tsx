import styles from "../../styles/Message.module.css";
import { Message } from "../../types/message";

const MessageMe = (message: Message) => {
  return (
    <div className={styles.message__container_me}>
      <span className={styles.message__author}>Me</span>
      <p className={styles.message__body_me}>{message.body}</p>
    </div>
  );
};

export default MessageMe;
