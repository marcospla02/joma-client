import { Products } from "@/Interfaces/Interfaces";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const CardProduct = ({ name, stock, description, price, image }: Products) => {
  const nameUppercase = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Card
      sx={{
        width: 235,
        marginRight: "20px",
        marginBottom: "20px",
        boxShadow: "2px 2px 10px  black",
      }}
    >
      <CardHeader
        action={
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        }
        title={nameUppercase}
      />
      <CardMedia
        component="img"
        height="200"
        image={image.url}
        alt="imagenes de los bancos"
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="body2" color="black" sx={{ fontWeight: "800" }}>
          <span>Precio: ${price}</span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart">
          <AddShoppingCartIcon sx={{ color: "#000" }} />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon sx={{ color: "#000" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardProduct;
