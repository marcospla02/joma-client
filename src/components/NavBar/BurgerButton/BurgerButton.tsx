import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import "./BurgerButton.css";

function BurguerButton({ clicked, handleClick }: any) {
  return (
    <>
      <div className="buttonBg" onClick={handleClick}>
        <MenuOpenIcon sx={{ fontSize: 50 }} />
      </div>

      {clicked && (
        <div className={`buttonBg__container ${clicked ? "active" : ""}`}>
          <h3>
            <a href="/">Casa</a>
          </h3>
          <h3>
            <a href="/cart">Carrito</a>
          </h3>
          <h3>
            <a href="/favorites">Favoritos</a>
          </h3>
          <h3>
            <a href="/profile">Perfil</a>
          </h3>
        </div>
      )}
    </>
  );
}

export default BurguerButton;
