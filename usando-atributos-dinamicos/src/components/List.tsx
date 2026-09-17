interface listDetailsInterface{
    name:string;
    day:React.ReactNode;
}


export function List(){
    const listDetails:listDetailsInterface ={
        name: "Isabelly",
        day: formatDate(new Date())
    }
    
    function formatDate(date: Date): React.ReactNode {
        const formatedDate = new Intl.DateTimeFormat(
            'pt-BR', 
            {weekday: 'long'}
        ).format(date);

        console.log(formatedDate)
        return formatedDate
    }

    return(
        <>
            <h2>Lista de compras da {listDetails.name}</h2>
            <p><b>Dia da feira:</b>{listDetails.day}</p>
            <ul style={{ color:'pink', backgroundColor: 'black' }}>
                <li>Maça</li>
                <li>Banana</li>
                <li>Abacate</li>
            </ul>
        </>
    );
}