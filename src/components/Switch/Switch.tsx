import { Cart, Favorites, Home, Profile } from "@/pages";
import { Route, Routes } from "react-router-dom";

const Switch = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Switch;
