import type { CoffeeProps } from "../interfaces/Coffe";
import { Coffee } from "./Coffee";

export function Recipe(props: CoffeeProps) {
  return (
    <>
      <Coffee {...props} />
    </>
  );
}
