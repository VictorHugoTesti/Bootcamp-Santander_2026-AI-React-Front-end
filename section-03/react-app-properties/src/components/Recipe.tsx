
interface Props {
    imageSRC: string;
    coffee: {
        name: string;
        description: string;
        prepareTime?: number;
    }
}

export function Recipe({ imageSRC, coffee }: Props) {
  return (
    <>
      <img src={imageSRC} alt={coffee.name} width={170} />
      <h2 className="recipe-title">{coffee.name}</h2>
      <p className="recipe-description">{coffee.description}</p>
      <span><b>Tempo de preparo:</b> {coffee.prepareTime} min</span>
    </>
  );
}
