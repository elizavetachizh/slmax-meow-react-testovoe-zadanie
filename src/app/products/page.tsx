"use client";
import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import ProductCard from "../../components/Product/ProductCard";
import Link from "next/link";
import { useAppContext } from "@/src/context/AppContext";
import { useRouter } from "next/navigation";

export default function Products() {
  const { products } = useAppContext();
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Our products
      </Typography>
      <Button variant="outlined" onClick={handleBack}>
        Back
      </Button>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <ProductCard {...product} />
            <Link href={`/products/${product.id}`} passHref>
              <Button variant="contained" color="primary" fullWidth>
                Edit {product.title}
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
