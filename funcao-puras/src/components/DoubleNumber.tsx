interface Props{
    number:number;
}


export function DoubleNumber( {number}: Props){
    const double = number * 2

    return(
        <p><b>Número: </b>{number} - <b>Dobro do número: </b> {double} </p>
    )
}