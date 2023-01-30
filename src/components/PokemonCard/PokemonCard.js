import {Link} from "react-router-dom";


export default function PokemonCard({info}){

    const {name,stats,id,abilities,base_experience,forms} = info;

    console.log(info);

    return(
        <div>
            <hr/>
            <img alt={""} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
            <br/>
            {name}:{id}
            <br/>
            {`Base experience:${base_experience}`}

            <div> <br/>Stats:</div>
            {stats && stats.map(value=> <div>{value.stat.name}:{value.base_stat}</div>)}
            <br/>
            <div>Abilites:</div>
            {abilities && abilities.map((value,index)=> <div>{value.ability.name}</div>)}
            <hr/>
            {forms && forms && forms.map(value=>  <div> <Link state={id} to={`/forms/${value.name}`}><button>{value.name} form</button></Link> </div> )}
        </div>
    );
}