import {Link} from "react-router-dom";

export default function SearchPokemons({pokemons}){

    const{pokemon} = pokemons;

    return(
        <div>
            <Link to = {`/pokemons/${pokemon.name}`}>
                {pokemon.name}
            </Link>
        </div>
    );
}