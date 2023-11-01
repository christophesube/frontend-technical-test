import styles from "../../styles/Conversation.module.css";
import avatar from "../../assets/avatar.png";
import Image from "next/image";
import { getFrenchMonth } from "../../utils/getFrenchMonth";

const Conversation = ({ name, timestamp }) => {
  if (typeof timestamp == "undefined") {
    timestamp = Date.now();
  }
  const month = getFrenchMonth(timestamp);

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
