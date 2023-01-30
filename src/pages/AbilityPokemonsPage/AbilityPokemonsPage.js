import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {pokeAction} from "../../redux/slices/poke.slice";
import AbilityPoke from "../../components/AbilityPoke/AbilityPoke";

export default function AbilityPokemonsPage(){

    const {name} = useParams();

    const {abilityFilters} = useSelector(state => state.abilityFilters);
    const {pokemon:pokemons} = abilityFilters;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(pokeAction.getAbility({name: name}))
    }, [])

    return(
        <div>
            <hr/>
            Pokemons with chosen ability:
            {
                pokemons && pokemons.map((pokemon,index)=>  <AbilityPoke key={index} pokemon ={pokemon}/>)
            }
        </div>
    );
}