import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const MessagesList = () => {
  const messages = useSelector((state: RootState) => state.reducerMessages);
  console.log(messages);

  return <div></div>;
};

export default MessagesList;
