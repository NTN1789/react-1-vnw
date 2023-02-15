import './App.css';
import Card from './components/Card';
import bruxa from "./assets/bruxa.png"
import fada from "./assets/fada.png"
import fantasma from "./assets/fantasma.png"
import pirata from "./assets/pirata.png"
import vampiro from "./assets/vampiro.png"
import zumbi from "./assets/zumbi.png"

function geraCard({ img, nome }) {
  return (
    <Card img={img} nome={nome}></Card>
  )
}


function App() {
  const cards = [
    {
      nome: "Bruxa",
      img: bruxa
    },
    {
      nome: "Fada",
      img: fada
    },
    {
      nome: "Fantasma",
      img: fantasma
    },
    {
      nome: "Pirata",
      img: pirata
    },
    {
      nome: "Vampiro",
      img: vampiro
    },
    {
      nome: "Zumbi",
      img: zumbi
    },
  ]
  return (
    <div className="App">
      <h1>Carnaval VnW</h1>
      <div className='card-container'>
        {cards.map(geraCard)}
      </div>
      <footer>
        <p>Redes sociais: fdasjfhasjldfhasjlfhlajkshfjlasdhfljkashfuowhflhuqerhopagijhsdlksdjdflç</p>
        <p>Orçamento: R$100000000,00</p>
        <p>Contatos: gmail, linkein</p>
        <p>PIX: ...</p>
      </footer>
    </div>
  )
}

export default App;
