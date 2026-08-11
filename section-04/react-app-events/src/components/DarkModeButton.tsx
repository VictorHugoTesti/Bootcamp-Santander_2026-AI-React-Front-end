export function DarkModeButton() {
  //   function handleClick() {
  //     alert("Você mudou para Dark");
  //   }

  const handleClick = () => {
    alert("Você mudou para Dark");
  };

  return (
    <>
      <button className="button" onClick={handleClick}>
        🌙
      </button>
    </>
  );
}
