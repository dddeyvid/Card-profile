import styles from "./styles/styles.module.css"

export default function Card({imgProfile, name, bio, tel, email, git, linkd, tt}) {
  return (
    <>
    <div className={styles.container}>

      <img className={styles.img} src={imgProfile} alt="" />
      
      <h2 style={{marginTop:"2rem"}}>{name}</h2>
      
      <hr className={styles.hrLeft} />
       
      <p style={{marginTop:"2rem"}}>{bio}</p>
      
      <hr className={styles.hrLeft} />
      
      <p style={{marginTop:"2rem"}}>{tel}</p>
      
      <hr className={styles.hrLeft} />

      <a style={{marginTop:"2rem"}} href={email}>{email}</a>
      
      <hr className={styles.hrLeft} />

      <button className={styles.button}>
  <a href={git} target="_blank" rel="noopener noreferrer">
    GitHub
  </a>
</button>

<button className={styles.button}>
  <a href={linkd} target="_blank" rel="noopener noreferrer">
    LinkedIn
  </a>
</button>

<button className={styles.button}>
  <a href={tt} target="_blank" rel="noopener noreferrer">
    Twitter
  </a>
</button>


      
    </div>
  </>
  )
}