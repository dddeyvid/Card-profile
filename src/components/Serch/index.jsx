import styles from "./styles.module.css"

export default function Search() {
    return (
        <>
            <div className={styles.container}>
            <div className={styles.form}>
        <input type="text" className={styles.input} placeholder="Insira o nickname de um perfil no GitHub" />
        <button className={styles.button}>Pesquisar</button>
      </div>
            </div>
        </>
    );
  }
  