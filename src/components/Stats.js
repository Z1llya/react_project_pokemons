export default function Stats({value}){

    const {base_stat,stat} = value;
    return(
        <div>
            {stat.name}:{base_stat}
            <br/>
        </div>
    );
}