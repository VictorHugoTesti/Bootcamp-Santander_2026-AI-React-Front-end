import type { PropsWithChildren } from "react";
import { Button } from "../Button";

interface Props {
  theme: "dark" | "light";
}

export function SwitchThemeButton({
  theme,
  children,
}: PropsWithChildren<Props>) {
  const handleClick = () => {
    const shouldChangeTheme = confirm(`Você Selecionolu o Tema ${theme}`);
    if (!shouldChangeTheme) {
      // shouldChangeTheme === False
      return;
    }

    // light-theme | dark-theme
    document.body.classList.add(`${theme}-theme`);

    const themeToRemove = theme === "light" ? "dark" : "light";
    document.body.classList.remove(`${themeToRemove}-theme`);
  };

  return <Button onClick={handleClick}>{children}</Button>;
}
