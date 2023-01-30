import {Link} from "react-router-dom";

import "./Header.css"

export default function Header(){
    return(
        <div className="headers">
            <div><Link to={'search'}>Search</Link></div>
            <div><Link to={'pokemons'}>Pokemons</Link></div>
        </div>
    );
}