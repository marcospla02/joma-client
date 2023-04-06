import { useEffect } from "react";
import "./App.css";
import { NavBar, Switch } from "./components";
import { getProductsDb, useAppDispatch } from "./Redux";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsDb());
  });
  return (
    <div>
      <NavBar />
      <main>
        <Switch />
      </main>
    </div>
  );
}

export default App;
