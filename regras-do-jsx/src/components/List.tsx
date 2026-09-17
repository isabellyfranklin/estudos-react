import imgFeira from './../assets/feira.jpg'

export function List(){
    return(
        <>
            <h1>Feira | Lista de compras</h1>
            <img src={imgFeira} alt="Feira" className='imagem'/>
            <ul className='list'>
                <li>Banana</li>
                <li>Maçã</li>
                <li>Tomate</li>
                <li>Couce</li>
            </ul>
        </>
    )
}