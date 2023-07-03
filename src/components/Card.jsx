import styles from "../styles/styles.module.css"
import Button from "./Button"

export default function Card({imgProfile, name, bio, tel, email, git, linkd, tt}) {
  
  function openLink(linkUrl){
    window.open(linkUrl, "_blank");
    
  }
  
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

      <Button action={() => openLink(git)} text={"GitHub"} />
      <Button action={() => openLink(linkd)} text={"Linkedin"} />
      <Button action={() => openLink(tt)} text={"Twitter"} />

    </div>
  </>
  )
}