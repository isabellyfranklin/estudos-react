import imgMarket from './../assets/market.jpg'

interface imgOptions{
    source: string;
    alternative: string;
    width: number;
    style?: React.CSSProperties;
}


export function MarketImagem(){
    const imagemOptions: imgOptions = {
        source: imgMarket,
        alternative: "caixa com varios tomates dentro",
        width: 400,
        style:{ borderRadius: 30 }
    };

    const {source,alternative,width} = imagemOptions;

    return(
        <>
            <img 
            src={source} 
            alt={alternative}
            width={`${width}px`}
             />
        </>
    );
}