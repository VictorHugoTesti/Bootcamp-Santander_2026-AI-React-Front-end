import type { PropsWithChildren } from "react";
import "../App.css";

interface Props {
  onClick?: () => void;
}

export function Recipe({ children, onClick }: PropsWithChildren<Props>) {
  function handleClick() {
    if (onClick) {
      onClick();
    }
  }

  return (
    <div className="card">
      {children}
      <button onClick={handleClick} className="button">
        Ver Receita
      </button>
    </div>
  );
}
