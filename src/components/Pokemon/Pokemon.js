import {Link} from "react-router-dom";

import {frontPicture} from "../../constans";
import "./Pokemon.css"

export default function Pokemon({poke}){
    const{url,name} = poke;


    const id = url.slice(34).replace("/","");

    return(

        <div className="pokemon">
            <Link to = {`/pokemons/${name}`}>

            <img alt={"picture"} src={frontPicture+`${id}`+`.png`}/>
            {name}
            </Link>
        </div>

    );
}