import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { IProduct } from "@/src/data/products";
import CloseIcon from "@mui/icons-material/Close";
import { useAppContext } from "@/src/context/AppContext";
export default function ProductCard({
  id,
  title,
  description,
  price,
}: IProduct) {
  const { deleteProduct } = useAppContext();
  return (
    <Card>
      <CardContent>
        <CloseIcon onClick={() => deleteProduct(id)} />
        <Typography gutterBottom variant="h5" component="div">
          {title}

        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          ${price.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
}
