import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { User } from "../../types/user";
import { actionCreateConversations } from "../../store/thunks";
import styles from "../../styles/Conversation.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CreateConversation = () => {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState(1);
  const users = useSelector((state: RootState) => state.reducerMessages.users);
  const newConversationId = useSelector(
    (state: RootState) => state.reducerMessages.newConversationId
  );
  const [prevData, setPrevData] = useState(newConversationId);
  const dispatch = useDispatch() as AppDispatch;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    setSelectedValue(value);
  };

  const handSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(actionCreateConversations(selectedValue));
  };

  useEffect(() => {
    if (newConversationId !== prevData) {
      router.push(`/conversation/${newConversationId}`);
    }
    setPrevData(newConversationId);
  }, [newConversationId, router, prevData]);

  return (
    <form className={styles.createContainer} action='#' onSubmit={handSubmit}>
      <label htmlFor='users'>Démarrer une conversation avec : </label>
      <>
        <select id='users' onChange={handleChange} value={selectedValue}>
          {users.map((user: User) => (
            <option key={user.id} value={user.id}>
              {user.nickname}
            </option>
          ))}
        </select>
        <button type='submit'>Valider</button>
      </>
    </form>
  );
};

export default CreateConversation;
