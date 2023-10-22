import Image from "next/image";
import deleteIcon from "../../assets/delete.png";
import styles from "../../styles/Delete.module.css";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { actionDeleteMessage } from "../../store/thunks";

const Delete = (id: number) => {
  const dispatch = useDispatch() as AppDispatch;

  const handleDelete = () => {
    console.log("deleted message", id);
    dispatch(actionDeleteMessage(id));
  };

  return (
    <Image
      src={deleteIcon}
      width={50}
      height={50}
      alt='avatar'
      className={styles.delete}
      onClick={handleDelete}
    />
  );
};

export default Delete;
