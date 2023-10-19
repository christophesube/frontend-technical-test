import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Conversation from "../Conversation/Conversation";

const ConversationsList = () => {
  const conversations = useSelector(
    (state: RootState) => state.reducerMessages.conversations
  );
  console.log(conversations);

  return (
    <div>
      {conversations.map((item) => (
        <Conversation
          key={item.id}
          name={item.senderNickname}
          timestamp={item.lastMessageTimestamp}
        />
      ))}
    </div>
  );
};

export default ConversationsList;
