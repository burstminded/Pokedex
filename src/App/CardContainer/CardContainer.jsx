import './CardContainer.css'
import { useEffect, useState } from "react";
import PokeCard from "../PokeCard/PokeCard.jsx";

function CardContainer({pokemons, onCardClick}) {

    const [pokemonsArray, setPokemonsArray] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetchPokeData(pokemons);
    }, [pokemons, pokemonsArray]);

    function fetchPokeData(array) {
        Promise.all(array.map(pokemon => fetch(pokemon.url).then(response => response.json())))
            .then(data => {
                setPokemonsArray(data);
                setIsLoaded(true);
            })
            .catch(error => {
                console.log(error);
            });
    }

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    return (
        <div className="cardContainer">
            {pokemonsArray.map(pokemon => (
                <PokeCard
                    stats={pokemon.stats}
                    name={pokemon.name}
                    weight={pokemon.weight}
                    moves={pokemon.moves.length}
                    pokeTypes={pokemon.types.map(sample => sample.type.name)}
                    images={pokemon['sprites']['other']['official-artwork']['front_default']}
                    key={pokemon.name}
                    isLoaded={isLoaded}
                    id={pokemon.id}
                    onCardClick={(...e)=>onCardClick(...e)}
                />
            ))}
        </div>
    );
}

export default CardContainer;