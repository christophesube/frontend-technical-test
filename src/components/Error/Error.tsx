import styles from "../../styles/Error.module.css";

const Error = ({ content }) => {
  return (
    <div className={styles.container}>
      <p>{content}</p>
    </div>
  );
};

export default Error;
