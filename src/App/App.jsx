import './App.css'
import PokeCard from "../PokeCard/PokeCard.jsx";
function App() {

  return (
    <>
        <header><h1>Pokedex</h1></header>
        <div className="cardContainer">
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
        </div>
    </>
  )
}

export default App
