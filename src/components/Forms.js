import {Link} from "react-router-dom";

export default function Forms({value}){

    const {name} = value;

    return(
        <div>
            <Link to={`/forms/${name}`}><button>{name} form</button></Link>
        </div>
    );
}