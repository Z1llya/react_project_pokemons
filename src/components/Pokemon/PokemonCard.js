import {frontPicture} from "../../constans/urls";
import Stats from "../Stats";
import Abilities from "../Abilities";
import {Link} from "react-router-dom";
import Forms from "../Forms";

export default function PokemonCard({info}){

    // console.log(info);
    //
    const {name,stats,id,sprites,abilities,base_experience,forms} = info;

    // console.log(stats.base_stat);

    // const picture = sprites.front_default;
    // //
    // //
    console.log();
    return(
        <div>
            <hr/>
            <img alt={"picture"} src={sprites.front_default}/>
            <br/>
            {name}:{id}
            <br/>
            {`Base experience:${base_experience}`}

            <div> <br/>Stats:</div>
            {stats.map(value=> <Stats value={value}/>)}
            <br/>
            <div>Abilites:</div>
            {abilities.map(value=> <Abilities value={value} />)}
            <hr/>
            {forms && forms.map(value=><Forms value={value}/> )}
        </div>
    );
}