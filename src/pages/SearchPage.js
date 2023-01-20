import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {pokeAction} from "../redux/slices/poke.slice";
import PokemonCard from "../components/Pokemon/PokemonCard";

export default function SearchPage(){

    const [term, setTerm] = useState("");

    const {pokemon} = useSelector(state => state.pokemon);

    const dispatch = useDispatch();



    const submitHandler = (e) => {
            e.preventDefault();
            if (term === "") return alert("Please enter search term!");
            // dispatch(fetchAsyncMovies(term));
            // dispatch(fetchAsyncShows(term));
            dispatch(pokeAction.getPokemon({name: term}))


            setTerm("");



    };

    let arr = [];

    for (let value in pokemon){
        arr = [pokemon];
    }
    return(
        <div>
             <form  onSubmit={submitHandler}>
                <input
                    type="text"
                    value={term}
                    placeholder="Search"
                    onChange={(e) => setTerm(e.target.value)}
                />
                <button type="submit">OK
                </button>

                <div>
                    {arr && arr.map((info, index) => <PokemonCard key={index} info={info}/>)}

                </div>

            </form>
        </div>
    );
}