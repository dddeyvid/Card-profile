import Card from "./components/Card"
import eueu from "./assets/fotoeu.jpeg"
import { useEffect } from "react"


export default function App() {
  
  async function getInfoGit(userName){
    //fazer request
    const gitHubInfo = await fetch("https://api.github.com/users/dddeyvid")
    console.log(gitHubInfo)
    //colocar useState se der certo
    //se der merda falar q deu merda
  }

  useEffect(()=> {
    getInfoGit("dddeyvid")
  },[])
  
  return (
    
      <Card
        imgProfile={eueu}
        name = "Deyvid Rocha"
        bio = "Estudante de React"
        tel = "(19) 99138-1152"
        email = "davi_rocha@live.com"
        git = "https://github.com/dddeyvid"
        linkd = "https://www.linkedin.com/in/deyvid-rocha/"
        tt = "https://twitter.com/home"
      />
    
  )
}