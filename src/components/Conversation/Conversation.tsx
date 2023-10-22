import styles from "../../styles/Conversation.module.css";
import avatar from "../../assets/avatar.png";
import Image from "next/image";
import { getFrenchMonth } from "../../utils/getFrenchMonth";
import { getFrenchDate } from "../../utils/getFrenchDate";

const Conversation = ({ name, timestamp }) => {
  const month = getFrenchMonth(timestamp);
  const hour = getFrenchDate(timestamp);

  return (
    <div className={styles.container}>
      <Image
        src={avatar}
        width={50}
        height={50}
        alt='avatar'
        className={styles.image}
      />
      <div className={styles.subcontainer}>
        <span>{name}</span>
        <span className={styles.timestamp}>Dernier message : en {month}</span>
      </div>
    </div>
  );
};

export default Conversation;
