import type { MouseEventHandler, PropsWithChildren } from "react";

interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export function Button({ children, onClick }: PropsWithChildren<Props>) {
    return (
        <button className="button" onClick={onClick}>
            {">"}{children}{"<"}
        </button>
    );
}