import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {pokeAction} from "../../redux/slices/poke.slice";
import TypePoke from "../../components/TypePoke/TypePoke";

export default function TypePokemonsPage(){

    const {name} = useParams();

    const {typeFilters} = useSelector(state => state.typeFilters);
    const {pokemon:pokemons} = typeFilters;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(pokeAction.getType({name: name}))
    }, [])


    return(
        <div>
            <hr/>
            Pokemons with chosen type
            {
                pokemons && pokemons.map((pokemon,index)=>  <TypePoke key={index} pokemon ={pokemon}/>)
            }

        </div>
    );
}