import {Link} from "react-router-dom";

export default function AbilityPoke({pokemon}){
    const {pokemon:poke} = pokemon;

    return(
        <div>
            <Link to = {`/pokemons/${poke.name}`}>
                {poke.name}
            </Link>
        </div>
    );
}