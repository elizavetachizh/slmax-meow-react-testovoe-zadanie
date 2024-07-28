import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { IProduct } from "@/src/data/products";

export default function ProductCard({ title, description, price }: IProduct) {
  return (
    <Card>
      <CardContent>
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
