import { LikeButton } from "./LikeButton";

interface Props {
  imageSource: string;
  alternative: string;
  user: string;
  text: string;
}

export function Post({
  imageSource,
  alternative,
  user,
  text,
}: Props) {
  return (
    <div className="">
      <img src={imageSource} alt={alternative} />
      <p>
        <b>@{user}: </b>
        {text}
      </p>
      <LikeButton onLike={() => {alert(`Você Curtiu a portagem de ${user}`)}} />
    </div>
  );
}
