import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Conversation from "../Conversation/Conversation";
import styles from "../../styles/ConversationsList.module.css";
import Link from "next/link";
import { getLoggedUserId } from "../../utils/getLoggedUserId";

const ConversationsList = () => {
  const conversations = useSelector(
    (state: RootState) => state.reducerMessages.conversations
  );
  const myId = getLoggedUserId();

  return (
    <div>
      {conversations.map((item) => (
        <Link
          key={item.id}
          className={styles.global}
          href={`/conversation/${item.id}`}>
          <Conversation
            name={
              myId === item.senderId
                ? "Discussion avec : " + item.recipientNickname
                : "Discussion avec : " + item.senderNickname
            }
            timestamp={item.lastMessageTimestamp}
          />
        </Link>
      ))}
    </div>
  );
};

export default ConversationsList;
