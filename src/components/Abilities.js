export default function Abilities({value}){
    const {ability} = value;
    return(
        <div>
            {ability.name}
        </div>
    );
}