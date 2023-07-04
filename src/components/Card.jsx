import styles from "../styles/styles.module.css"
import Button from "./Button"
import { Icon } from '@iconify/react';


export default function Card({imgProfile, name, bio, followers, following, tel, email, git, linkd, tt}) {
  
  const twitterProfile = tt || ''

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
      
      <p style={{marginTop:"2rem"}}>{<Icon icon="octicon:people-16"/>}{followers} followers · {following} following</p>
                 
              
        
      <hr className={styles.hrLeft} />

      <Button action={() => openLink(`${git}${name}`)} text={"GitHub"} />
      {twitterProfile && (
          <Button action={() => openLink(`https://twitter.com/${twitterProfile}`)} text={"Twitter"} />
        )}  {/* gambiarra usando chat gpt para conseguir pegar valor do tt, preciso revisar dps.. */}
    </div>
  </>
  )
}