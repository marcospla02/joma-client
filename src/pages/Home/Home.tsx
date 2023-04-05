import { getProductsDb, useAppDispatch, useAppSelector } from "@/Redux";
import CardProduct from "@/components/Card/CardProduct";
import { useEffect } from "react";
import "./Home.css";
import Carrousel from "./Carrousel/Carrousel";

const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsDb());
  }, []);

  const images = [
    "c_fill,g_auto,h_550,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1680614896/WhatsApp_Image_2022-06-05_at_7.22.25_PM_1_g70w45.jpg",
    "c_lfill,g_face:auto,h_550,w_1250,y_0/v1680614913/living-blanco.jpg",
    "c_lfill,g_face:auto,h_480,w_1250,y_0/v1680614934/carro.jpg",
  ];

  return (
    <>
      <div className="home__carrousel">
        <Carrousel images={images} />
      </div>
      <div className="home">
        {products.length > 0 &&
          products.map((product) => {
            return (
              <CardProduct
                key={product._id}
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
                enabled={product.enabled}
                stock={product.stock}
              />
            );
          })}
      </div>
    </>
  );
};

export default Home;
