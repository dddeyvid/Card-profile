import Card from "./components/Card"
import eueu from "./assets/fotoeu.jpeg"
import { useEffect, useState } from "react"
import Search from "./components/Serch"
import axios from 'axios'

export default function App() {
  
  const [showCard, setShowCard] = useState(false) //controle da exibição do card
  const [profile, setProfile] = useState('')

  async function getInfoGit(userName){
    //fazer request

    try{
      const response = await axios.get(`https://api.github.com/users/${userName}`)
      const gitHubInfo = response.data
      setShowCard(true)
    } catch (error) {
      alert('Deu pau na maquina, tente de novo!', error)
    }
  }

  return (
    <>
      <Search onSearch={getInfoGit} profile={profile} setProfile={setProfile}/>
      {showCard && (
        <Card
          imgProfile={eueu}
          name = {gitHubInfo}
          bio = "Estudante de React"
          tel = "(19) 99138-1152"
          email = "davi_rocha@live.com"
          git = "https://github.com/dddeyvid"
          linkd = "https://www.linkedin.com/in/deyvid-rocha/"
          tt = "https://twitter.com/home"
        />
      )}
    </>
  )
}