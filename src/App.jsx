import Card from "./Card"
import eueu from "./assets/fotoeu.jpeg"


export default function App() {
  return (
    <div>
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
    </div>
  )
}