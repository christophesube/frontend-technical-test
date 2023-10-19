import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Conversation from "../Conversation/Conversation";
import styles from "../../styles/ConversationsList.module.css";
import Link from "next/link";

const ConversationsList = () => {
  const conversations = useSelector(
    (state: RootState) => state.reducerMessages.conversations
  );
  console.log(conversations);

  return (
    <div>
      {conversations.map((item) => (
        <Link
          className={styles.global}
          key={item.id}
          href={`/conversation/${item.id}`}>
          <Conversation
            name={item.senderNickname}
            timestamp={item.lastMessageTimestamp}
          />
        </Link>
      ))}
    </div>
  );
};

export default ConversationsList;
