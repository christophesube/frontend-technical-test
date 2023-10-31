import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { User } from "../../types/user";
import { actionSetSelectedUser } from "../../store/actions";
import { actionCreateConversations } from "../../store/thunks";
import styles from "../../styles/Conversation.module.css";
import { useState } from "react";

const CreateConversation = () => {
  const [selectedValue, setSelectedValue] = useState(1);
  const users = useSelector((state: RootState) => state.reducerMessages.users);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    // dispatch(actionSetSelectedUser(event.target.value));
    setSelectedValue(event.target.value);
  };

  const handSubmit = (event) => {
    event.preventDefault();
    dispatch(actionCreateConversations(selectedValue));
  };

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
