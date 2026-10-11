import style from './index.module.css'

interface Props{
    title?: boolean;
    text: string;

}

export default function FancyText ( {title, text}: Props ){
    return(
        title ? <h1 className={style.title}>{text}</h1> : <h3 className="cursive">{text}</h3>
    )
}