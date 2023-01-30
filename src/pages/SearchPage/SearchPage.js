import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import SearchComponent from "../../components/SearchComponent/SearchComponent";

import {pokeAction} from "../../redux/slices/poke.slice";



export default function SearchPage(){


    const [search,setSearch] = useState('');

    let {searchPokemons} = useSelector(state => state.searchPokemons);
    let {results:resName} =searchPokemons;

    const {ability} = useSelector(state => state.ability);
    const{results:resAbility} = ability;

    const {type} = useSelector(state => state.type);
    const {results:resType} = type;

    const dispatch = useDispatch();
    useEffect(()=>{

        dispatch(pokeAction.getSearchPokemons({offset:'0',limit:'1279'}));
        dispatch(pokeAction.getAllAbility({offset:'0',limit:'358'}));
        dispatch(pokeAction.getAllType({offset:'0',limit:'20'}));

    },[]);




    return(
        <div>
            <SearchComponent resName={resName} resAbility={resAbility} resType={resType} setSearch={setSearch} search={search}/>
        </div>
    );
}