import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonNav() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 300,
        position: "absolute",
        right: "15px",
        top: "12%",
        minWidth: 100,
      }}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ bgcolor: "transparent" }}
      >
        <BottomNavigationAction
          icon={<HomeIcon />}
          sx={{ color: "#000" }}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          icon={<ShoppingCartIcon />}
          sx={{ color: "#000" }}
          onClick={() => navigate("/cart")}
        />
        <BottomNavigationAction
          icon={<FavoriteBorderIcon />}
          sx={{ color: "#000" }}
          onClick={() => navigate("/favorites")}
        />
        <BottomNavigationAction icon={<PersonIcon />} sx={{ color: "#000" }} />
      </BottomNavigation>
    </Box>
  );
}
