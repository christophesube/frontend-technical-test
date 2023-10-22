import styles from "../../styles/Error.module.css";

const Error = () => {
  return (
    <div className={styles.container}>
      <p>
        Erreur durant le chargement des données, veuillez réessayer en
        rafraichissant votre page.
      </p>
    </div>
  );
};

export default Error;
