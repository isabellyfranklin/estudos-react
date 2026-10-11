import type { PropsWithChildren } from "react";

interface Props {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({ children, onClick }: PropsWithChildren<Props>) {
    return (
        <button className="button" onClick={(e)=> {
            e.stopPropagation();
            if(onClick){
              onClick(e);      
            }
            }}
            >
            {">"}{children}{"<"}
        </button>
    );
}