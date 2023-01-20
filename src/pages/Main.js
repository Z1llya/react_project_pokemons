import {Link, Outlet} from "react-router-dom"

export default function Main(){
    return(
        <div>
            <div><Link to={'search'}>Search</Link></div>
            <div><Link to={'pokemons'}>Pokemons</Link></div>
            <Outlet/>
        </div>
    );
}