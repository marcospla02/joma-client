import { Info, Products } from "@/Interfaces/Interfaces";
import { getProductsDb, useAppDispatch } from "@/Redux";
import { useEffect } from "react";
import { CardProduct } from "..";
import "./CaardsInfo.css";

const CardsInfo = (info: Info) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsDb());
  }, []);

  return (
    <div className="cards-info">
      {info.info.length > 0 &&
        info.info.map((product: Products) => {
          return (
            <CardProduct
              key={product._id}
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
              enabled={product.enabled}
              stock={product.stock}
              category={product.category}
            />
          );
        })}
    </div>
  );
};

export default CardsInfo;
