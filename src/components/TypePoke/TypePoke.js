import {Link} from "react-router-dom";

export default function TypePoke({pokemon}){
    const {pokemon:poke} = pokemon;

    return(
        <div>
            <Link to = {`/pokemons/${poke.name}`}>
                {poke.name}
            </Link>
        </div>
    );
}