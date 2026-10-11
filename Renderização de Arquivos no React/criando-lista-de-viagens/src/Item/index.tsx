import { useState } from "react";

interface Props{
    name:string;
    check?: boolean;
}

const Item:React.FC<Props> = ({ name, check}) => {

    const [isCheck, setCheck] = useState(check);

    const handleClick = () => {
        // True -> false 
        // Fase => True
        setCheck(!isCheck)
    }

    let itemName: React.ReactNode = name; 

    if(isCheck){
        itemName = <del>{name}</del>;
    }

    //⬜
    //✅
    return (
        <div className="item" onClick={handleClick}>
            {isCheck ? "✅" : "⬜"} 
            {itemName}
        </div>

    )

}

export default Item