import style from './Color.module.css'

interface Props {
    value: string;
}


export default function Color ( { value }:Props ){
    return(
        <div className={style.colorbox} style={{backgroundColor: value}}></div>
    )
}