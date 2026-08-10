import type { CoffeeProps } from "../interfaces/Coffe";

export function Coffee({ imageSRC, coffee, imageSIZE = 170 }: CoffeeProps) {
  return (
    <>
      <img src={imageSRC} alt={coffee.name} width={imageSIZE} />
      <h2 className="recipe-title">{coffee.name}</h2>
      <p className="recipe-description">{coffee.description}</p>
      <span>
        <b>Tempo de preparo:</b> {coffee.prepareTime} min
      </span>
    </>
  );
}
