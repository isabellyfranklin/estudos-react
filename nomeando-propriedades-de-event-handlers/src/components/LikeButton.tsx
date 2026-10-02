import type React from "react";
import { Button } from "./Button";

interface Props{
    onLike: React.MouseEventHandler<HTMLButtonElement>;
}

export function LikeButton ( { onLike }: Props){
    return (
        <Button onClick= { onLike }> s2 Amei</Button>
    )
}