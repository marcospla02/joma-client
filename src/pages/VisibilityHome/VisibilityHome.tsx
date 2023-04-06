import { CardsInfo } from "@/components";
import { useLocation, useNavigate } from "react-router-dom";
import "./VisibilityHome.css";
import { Products } from "@/Interfaces/Interfaces";

interface PropsVH {
  info: Products[];
  redirect?: string;
  title?: string;
}

const VisibilityHome = ({ info, redirect, title }: PropsVH) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleRedirect = () => {
    redirect && navigate(redirect);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h1 className="title-visibility">{title}</h1>
      <div
        className={`${
          location.pathname === "/" ? "all-products-in-home" : "visibility"
        }`}
      >
        {info?.length && <CardsInfo info={info.slice(0, 4)} />}
      </div>

      <div
        className={`visibility-container ${
          location.pathname === "/" ? "visibility" : ""
        }`}
      >
        {info?.length && <CardsInfo info={info} />}
      </div>
      <button
        onClick={handleRedirect}
        className={`carrousel__button button-redirect ${
          location.pathname === "/living" ||
          location.pathname === "/bancos" ||
          location.pathname === "/macetas" ||
          location.pathname === "/reposeras"
            ? "visibility"
            : ""
        }`}
      >
        {">"}
      </button>
    </div>
  );
};

export default VisibilityHome;
