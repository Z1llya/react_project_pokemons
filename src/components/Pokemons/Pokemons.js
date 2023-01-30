import {useDispatch, useSelector} from "react-redux";
import Pokemon from "../Pokemon/Pokemon";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {pokeAction} from "../../redux/slices/poke.slice";
import "./Pokemons.css"

export default function Pokemons(){

    const {pokemons} = useSelector(state => state.pokemons)
    const {results} = pokemons;

    const [query, setQuery] = useSearchParams({offset:'0',limit:'20'});

    let [off,setOff] = useState('');

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(pokeAction.getAll({offset:query.get('offset'),limit:query.get('limit')}))
    },[dispatch,query]);

    const prevPage = () => {
        const offset = +query.get('offset')-20;
        setOff(offset);
        const limit = 20;
        setQuery({offset:`${offset}`,
                limit:`${limit}`});
    };

    const nextPage = () => {
        const offset=+query.get('offset')+20;
        setOff(offset);

        const limit = 20;
        setQuery({offset:`${offset}`,
                limit:`${limit}`});
    };

    return(
        <div>
            <div className="buttons">
                <button  disabled={!off} onClick={prevPage}>Prev</button>
                <button onClick={nextPage} >Next</button>
            </div>
            <div className="pokemons">
                {results && results.map(poke => <Pokemon key={poke.name} poke = {poke}/>)}
            </div>
        </div>
    );
}