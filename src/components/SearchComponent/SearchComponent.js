import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

import "./Search.css"

export default function SearchComponent({resType,resName,resAbility,setSearch,search}){
    const {register, handleSubmit} = useForm();

    const submit = obj => {
        setSearch(obj.input);
    };
    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('input')}/>
                <input type="submit" />
                <br/>
                Names:
                {
                    resName && resName.filter(obj=> obj.name.includes(search)).map(names=>

                        <Link to = {`/pokemons/${names.name}`}>
                            <br/>
                            {names.name}

                    </Link>).slice(0,10)
                }
                <hr/>
                Abilities:
                {
                    resAbility && resAbility.filter(obj=> obj.name.includes(search)).map(ability=>
                        <Link to = {`/search/${ability.name}`}>
                            <br/>
                            {ability.name}
                        </Link>).slice(0,10)
                }
                <hr/>
                Types:
                {
                    resType && resType.filter(obj=> obj.name.includes(search)).map(type=>
                        <Link to = {`/search/type/${type.name}`}>
                            <br/>
                            {type.name}
                        </Link>).slice(0,10)
                }
            </form>

        </div>
    );
}