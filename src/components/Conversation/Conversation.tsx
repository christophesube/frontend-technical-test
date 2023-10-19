import styles from "../../styles/Conversation.module.css";
import avatar from "../../assets/avatar.png";
import Image from "next/image";

const Conversation = ({ name, timestamp }) => {
  const date = new Date(timestamp);
  const month = { month: "long" };
  const hour = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const frenchMonth = new Intl.DateTimeFormat("fr-FR", month).format(date);
  const frenchHour = new Intl.DateTimeFormat("fr-FR", hour).format(date);

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
        <span className={styles.timestamp}>
          Dernier message : en {frenchMonth}, à {frenchHour}
        </span>
      </div>
    </div>
  );
};

export default Conversation;
