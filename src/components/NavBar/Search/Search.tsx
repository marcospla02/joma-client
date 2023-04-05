import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";

export const Search = () => {
  return (
    <div className="container-search">
      <input type="search" className="search__input" placeholder="Buscar..." />
      <button className="container-search__button">Buscar</button>
    </div>
  );
};
