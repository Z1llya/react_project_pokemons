import {useDispatch, useSelector} from "react-redux";
import Pokemon from "../Pokemon/Pokemon";
import {useEffect} from "react";
import {pokeAction} from "../../redux/slices/poke.slice";
import {useSearchParams} from "react-router-dom";

export default function Pokemons(){

    const {pokemons} = useSelector(state => state.pokemons)

    const {results} = pokemons;

    const [query, setQuery] = useSearchParams({offset:'0'});



    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(pokeAction.getAll({offset:query.get('offset')}))
    },[query]);

    const prevPage = () => {
        const offset = +query.get('offset')-20;
        setQuery({offset:`${offset}`});
    };

    const nextPage = () => {
        const offset = +query.get('offset')+20;
        setQuery({offset:`${offset}`});
    };

    return(
        <div>
            <button  onClick={prevPage}>Prev</button>
            <button  onClick={nextPage} >Next</button>
            {results && results.map(poke => <Pokemon key={poke.name} poke = {poke}/>)}
        </div>
    );
}