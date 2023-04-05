import { useState } from "react";
import ButtonNav from "./ButtonNav/ButtonNav";
import "./NavBar.css";
import { Search } from "./Search/Search";
import BurguerButton from "./BurgerButton/BurgerButton";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick: any = () => {
    setClicked(!clicked);
  };

  return (
    <div className="nav">
      <div className="nav__div-logo">
        <img
          src="https://res.cloudinary.com/marcos02/image/upload/ar_1:1,b_rgb:fbfbfb,bo_2px_solid_rgb:000000,c_fill,g_auto,h_100,r_max,w_100,x_0/v1680276214/IMG_20200730_185234_894_nru4pj.png"
          alt="Logo joma pallets"
          width="80px"
          height="80px"
          className="logo"
        />
      </div>
      <Search />
      <div className="nav__buttonNav">
        <ButtonNav />
      </div>

      <div className="burguer">
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>
      {/* <div className={`initial ${clicked ? "active" : ""}`}></div> */}
    </div>
  );
};

export default NavBar;
