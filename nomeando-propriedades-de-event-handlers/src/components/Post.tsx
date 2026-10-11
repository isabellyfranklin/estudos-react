import { LikeButton } from "./LikeButton";

interface Props{
    imagemSource: string;
    alternative: string;
    user: string;
    text: string;
    onLikePost: React.MouseEventHandler<HTMLButtonElement>;
}

export function Post({ imagemSource,alternative,user,text,onLikePost }: Props ){

    return(
        <div className="post" onClick={()=> alert("voce clicou no componentes POST")}>
           <img src={imagemSource} alt={alternative}/>
           <p>
                <b>@{user}: </b>
                {text}
           </p>
           <LikeButton onLike={onLikePost}/>
        </div>
      
      
    )
}