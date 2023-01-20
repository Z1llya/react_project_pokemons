import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {pokeAction} from "../redux/slices/poke.slice";

export default function PokemonForms(){

    const {name} = useParams();

    const {forms} = useSelector(state => state.forms);

    const {id,sprites} = forms;

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(pokeAction.getForms({name:name}));
    },[]);



    return(
        <div>
            <img src={sprites.front_shiny} alt="pic"/>
            <br/>
            {name}:{id}
            <br/>
            {`Form order:${forms.form_order}`}
            <br/>
            {`Is mega:${forms.is_mega}`}
            <br/>
            {`Is battle only:${forms.is_battle_only}`}
        </div>
    );
}