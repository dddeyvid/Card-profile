import Card from "./components/Card"
import eueu from "./assets/fotoeu.jpeg"
import { useEffect, useState } from "react"
import Search from "./components/Serch"
import axios from 'axios'

export default function App() {
  
  const [showCard, setShowCard] = useState(false) //controle da exibição do card
  const [profile, setProfile] = useState('')
  const [gitHubInfo, setGitHubInfo] = useState(null) // tirando do escopo do try para poder passar para o componente Card

   async function getInfoGit(){ // function assincrona, uma function assincrona sempre espera por um await para esperar o resultado da promise passada
    try{
       const response = await axios.get(`https://api.github.com/users/${profile}`)
       const gitHubInfo = response.data
       setGitHubInfo(gitHubInfo) // armazenando as informaçoes da api na var gitHubInfo
       setShowCard(true) // mostrando o card
     } catch (error) {
       alert('Deu pau na maquina, tente de novo!', error)
     }
   }

  return (
    <>
      <Search onSearch={getInfoGit} profile={profile} setProfile={setProfile}/>
      {showCard && gitHubInfo && (
        <Card
          imgProfile={gitHubInfo.avatar_url}
          name = {gitHubInfo.login}
          bio = {gitHubInfo.bio}
          email = {gitHubInfo.email}
          followers = {gitHubInfo.followers}
          following = {gitHubInfo.following}
          git = "https://github.com/"
          tt = {gitHubInfo.twitter_username}
        />
      )}
    </>
  )
}