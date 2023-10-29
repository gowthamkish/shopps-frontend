import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ImageList } from "@mui/material";

const ProductCard = (props) => {
  return (
    <>
      <Card>
        <CardMedia
          style={{ padding: "2rem", boxSizing: "border-box" }}
          component="img"
          alt="green iguana"
          height="300"
          image={props?.item?.image}
          loading="lazy"
        />
        <CardContent>
          <Typography
            title={props?.item?.title}
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {props?.item?.title}
          </Typography>
          <Typography
            className="line-clamp"
            variant="body2"
            color="text.secondary"
          >
            {props?.item?.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button variant="outlined" size="small">
            Buy Now
          </Button>
          <Button variant="outlined" size="small">
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
