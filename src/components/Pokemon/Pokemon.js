import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {pokeAction} from "../../redux/slices/poke.slice";
import {frontPicture} from "../../constans/urls";
import {Link} from "react-router-dom";


export default function Pokemon({poke}){
    const{url,name} = poke;








    const id = url.slice(34).replace("/","");

    return(

        <div>
            <Link to = {`/pokemons/${name}`}>

            <img alt={"picture"} src={frontPicture+`${id}`+`.png`}/>
            {name}
            </Link>
        </div>

    );
}