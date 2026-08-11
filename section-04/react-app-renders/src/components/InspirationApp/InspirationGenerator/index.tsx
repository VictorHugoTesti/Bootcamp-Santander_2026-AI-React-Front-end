import { useState } from "react";
import inspirations from "../../../data/inspirations";
import FancyText from "../FancyText";
import Color from "../Color";

export default function InspirationGenerator({
  children,
}: React.PropsWithChildren) {
  const [index, setIndex] = useState(0);
  const inspiration = inspirations[index];

  const handleClick = () => {
    setIndex((index + 1) % inspirations.length);
  };

  return (
    <>
      <p>Frase Motivacional: </p>
      {inspiration.type === "quote" ? (
        <FancyText text={inspiration.value} />
      ) : (
        <Color value={inspiration.value} />
      )}

      <button className="button" onClick={handleClick}>
        Me Inspire!
      </button>
      {children}
    </>
  );
}
