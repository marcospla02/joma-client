import { Products } from "@/Interfaces/Interfaces";
import { useAppSelector } from "@/Redux";
import { Cart, Favorites, Home, Profile, VisibilityHome } from "@/pages";
import { Route, Routes } from "react-router-dom";

const Switch = () => {
  const products = useAppSelector((state) => state.products);

  const productsLivings = products.filter(
    (prod: Products) => prod.category.name === "living"
  );

  const productsBanks = products.filter(
    (prod: Products) => prod.category.name === "banco"
  );

  const productsLoungeChair = products.filter(
    (prod: Products) => prod.category.name === "reposera"
  );

  const productsFlowerpot = products.filter(
    (prod: Products) => prod.category.name === "macetero"
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            productsLivings={productsLivings}
            productsBanks={productsBanks}
            productsLoungeChair={productsLoungeChair}
            productsFlowerpot={productsFlowerpot}
          />
        }
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/bancos" element={<VisibilityHome info={productsBanks} />} />
      <Route
        path="/living"
        element={<VisibilityHome info={productsLivings} />}
      />
      <Route
        path="/reposeras"
        element={<VisibilityHome info={productsLoungeChair} />}
      />
      <Route
        path="/macetas"
        element={<VisibilityHome info={productsFlowerpot} />}
      />
    </Routes>
  );
};

export default Switch;
