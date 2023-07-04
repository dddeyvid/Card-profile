import styles from "./styles.module.css"

export default function Search({onSearch, profile, setProfile}) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.form}>
                    <input  
                        type="text" 
                        id="username" 
                        className={styles.input} 
                        onChange={(e)=>{setProfile(e.target.value)}}
                        value={profile}
                        placeholder="Insira o nickname de um perfil no GitHub" 
                        />
                    <button className={styles.button} onClick={onSearch}>Pesquisar</button>
                </div>
            </div>
        </>
    );
  }
  