export function DarkModeButton() {
    const handleClick = () => {
        alert("Voce selecionou o tema dark")
    }

  return (
    <button className="button" onClick={handleClick}>Lua</button>
  
  );
}
