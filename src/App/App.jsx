import './App.css'
import PokeCard from "./PokeCard/PokeCard.jsx";
import CardContainer from "./CardContainer/CardContainer.jsx";
import { useEffect, useState } from "react";

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [activePokemon, setActivePokemon] = useState({});
    const [numberOfLoads, setNumberOfLoads] = useState(0);

    useEffect(() => {
        fetchPokemons();
    }, []);

    function fetchPokemons() {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${numberOfLoads * 12}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemons([...pokemons, ...data.results]);
            })
            .catch((error) => {
                console.log(error);
            });
        setNumberOfLoads((n) => n + 1);
    }

    function handleCardClick(...e) {
        console.log(e);
        let stats= e[0];
        let name = e[1];
        let weight = e[2];
        let moves = e[3];
        let pokeTypes = e[4];
        let images = e[5];
        let id = e[6];
        console.log(id);
            setActivePokemon({
                stats,
                name,
                weight,
                moves,
                id,
                pokeTypes: pokeTypes.map(sample => sample.charAt(0).toUpperCase() + sample.slice(1)),
                images,
                isActive: true,
                isLoaded: true
            })
    }

    return (
        <>
            <header><h1>Pokedex</h1></header>
            <CardContainer pokemons={pokemons} onCardClick={(...e)=>handleCardClick(...e)}/>
            <PokeCard
                stats={activePokemon.stats}
                name={activePokemon.name}
                weight={activePokemon.weight}
                moves={activePokemon.moves}
                pokeTypes={activePokemon.pokeTypes}
                images={activePokemon.images}
                isActive={activePokemon.isActive}
                isLoaded={activePokemon.isLoaded}
                id={activePokemon.id}
            />
            <button onClick={fetchPokemons} className="loadMoreButton">Load More</button>
        </>
    )
}

export default App;