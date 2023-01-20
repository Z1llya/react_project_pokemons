import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {pokeAction} from "../../redux/slices/poke.slice";
import PokemonCard from "./PokemonCard";

export default function PokemonInfo() {

  const {name} = useParams();

  const {pokemon} = useSelector(state => state.pokemon);

  // console.log(results);

  // console.log(pokemon);

  // const result = [pokemon];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pokeAction.getPokemon({name: name}))
  }, [])

  let arr = [];

  for (let value in pokemon){
    arr = [pokemon];
  }
  console.log(arr);

  return (
      <div>
        {/*{result && result.map((info, index) => <PokemonCard key={index} info={info}/>)}*/}
        {arr && arr.map((info, index) => <PokemonCard key={index} info={info}/>)}


      </div>
  );
}