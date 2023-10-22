import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { User } from "../../types/user";
import { actionSetSelectedUser } from "../../store/actions";
import { actionCreateConversations } from "../../store/thunks";

const CreateConversation = () => {
  const users = useSelector((state: RootState) => state.reducerMessages.users);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(actionSetSelectedUser(event.target.value));
  };

  const handSubmit = (event) => {
    event.preventDefault();
    dispatch(actionCreateConversations());
  };

  return (
    <div className='convCreate__container'>
      <form action='#' onSubmit={handSubmit}>
        <label htmlFor='users'>Démarrer une conversation avec : </label>
        <select id='users' onChange={handleChange}>
          <option value=''>Sélectionnez une personne</option>
          {users.map((user: User) => (
            <option key={user.id} value={user.id}>
              {user.nickname}
            </option>
          ))}
        </select>
        <button type='submit'>Valider</button>
      </form>
    </div>
  );
};

export default CreateConversation;
