import { Products } from "@/Interfaces/Interfaces";
import { getCategoriesDb, getProductsDb, useAppDispatch } from "@/Redux";
import { useEffect } from "react";
import { Form, VisibilityHome } from "..";
import Carrousel from "./Carrousel/Carrousel";
import logo from "../../assets/img/logo_joma.jpeg";
import iconWpp from "../../assets/img/WhatsApp_icon.png";
import "./Home.css";

interface Props {
  productsLivings: Products[];
  productsBanks: Products[];
  productsLoungeChair: Products[];
  productsFlowerpot: Products[];
}

const Home = ({
  productsLivings,
  productsBanks,
  productsLoungeChair,
  productsFlowerpot,
}: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsDb());
    dispatch(getCategoriesDb());
  }, []);

  const images = [
    "c_fill,g_east,h_550,w_1250/v1680727621/reposera_mv9nyp.jpg",
    "c_fill,h_550,w_1250/v1680718185/bancos-marrones-recortada_k0bfxv.jpg",
    "c_lfill,g_face:auto,h_550,w_1250,y_0/v1680614913/living-blanco.jpg",
    "c_lfill,g_face:auto,h_480,w_1250,y_0/v1680614934/carro.jpg",
    "c_lfill,g_center,h_550,w_1250/v1680717416/banco-individual_cbvuga.jpg",
  ];

  return (
    <>
      <div className="home-carrousel">
        <Carrousel images={images} />
      </div>
      <div className="home">
        <VisibilityHome
          info={productsLivings}
          redirect={"/living"}
          title="Algunos de nuestros livings"
        />

        <VisibilityHome
          info={productsBanks}
          redirect={"/bancos"}
          title="Algunos de nuestros bancos"
        />

        <VisibilityHome
          info={productsLoungeChair}
          redirect={"/reposeras"}
          title="Algunos de nuestras reposeras"
        />

        <VisibilityHome
          info={productsFlowerpot}
          redirect={"/macetas"}
          title="Algunos de nuestros maceteros"
        />
      </div>
      <footer className="home__footer">
        <img src={logo} alt="Logo joma pallets" height="300px" />
        <Form />
      </footer>
      <img
        src={iconWpp}
        alt="WhatsApp"
        height="70px"
        width="70px"
        className="icon-wpp"
      />
    </>
  );
};

export default Home;
