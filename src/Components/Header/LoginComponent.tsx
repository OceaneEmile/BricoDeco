import Button from "../Button/Button";

export default function LoginComponent({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // function to handle the click on the connexion component
  function handleClick(): void {
    setIsOpen(true);
  }

  return (
    <div className="mx-6 mt-6" onClick={handleClick}>
      <Button text={"Connectez vous"} />
    </div>
  );
}
