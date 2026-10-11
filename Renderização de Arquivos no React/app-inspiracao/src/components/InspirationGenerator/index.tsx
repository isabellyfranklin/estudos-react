import type React from "react";
import inspirations from "../data/inspirations";
import FancyText from "../FancyText";
import { useState } from "react";
import Color from "../Color";

export default function InspirationGenerator ( {children}: React.PropsWithChildren  ){

    //index = guarda , seIndex = para altera o estado
    const [index, setIndex] = useState(0);
    const inspiration = inspirations[index]

    const handleClick = () => {
        setIndex((index + 1) % inspirations.length );
    }

    return(
        <>
            
            <p>Sua frase motivacional é: </p>
            {inspiration.type === 'quote' ?
                <FancyText text={inspiration.value} />
                : <Color value={inspiration.value}/>
            }
            <div>
                <button className="button" onClick={handleClick}>
                    Me inspire novamente
                </button>
            </div>
            {children}
        </>
    )
}