interface Props{
    imagem: string
    nameGroup: string
    totalMembers?:number
}


export function Group({imagem,nameGroup, totalMembers}: Props){

    return(
        <>
            <section className="group">
                <img
                    src={imagem}
                    alt={nameGroup}
                    width={250}
                    style={{ borderRadius:'15px'}}
                />
                <h1>Nome do grupo: {nameGroup}</h1>
                <p>Total de membros do grupo: {totalMembers}</p>
            </section>
        </>
    )
}