import type { PropsWithChildren } from "react";

interface iProps {
  onClick?: () => void;
}

export function Recipe({ children, onClick }: PropsWithChildren<iProps>) {
  function handleClick() {
    if (onClick) {
      onClick();
    }
  }

  return (
    <div className="card">
      {children}
      <button onClick={handleClick} className="button">
        {" "}
        ver receita
      </button>
    </div>
  );
}
