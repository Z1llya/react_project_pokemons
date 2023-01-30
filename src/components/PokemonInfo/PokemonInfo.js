import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PokemonCard from "../PokemonCard/PokemonCard";

import {pokeAction} from "../../redux/slices/poke.slice";

export default function PokemonInfo() {

  const {name} = useParams();
  const {poke} = useSelector(state => state.poke);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pokeAction.getPokemon({name: name}))
  }, [])


  return (
      <div>
        <PokemonCard info={poke}/>
      </div>
  );
}