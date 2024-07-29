"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import ProductCard from "../../components/Product/ProductCard";
import Link from "next/link";
import { useAppContext } from "@/src/context/AppContext";
import { useRouter } from "next/navigation";
import { IProduct } from "@/src/data/products";

export default function Products() {
  const { products, addProduct } = useAppContext();
  const [newProduct, setNewProduct] = useState<IProduct>({
    id: 0,
    title: "",
    description: "",
    price: 0,
  });
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const productToAdd = { ...newProduct, id: products.length + 1 };
    addProduct(productToAdd);
    setNewProduct({ id: 0, title: "", description: "", price: 0 });
  };
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Our products
      </Typography>
      <Button variant="outlined" onClick={handleBack}>
        Back
      </Button>
      <Typography style={{ margin: "0.5rem 0 0" }} variant="h4" component="h2">
        Add new product
      </Typography>
      <Box component="form" onSubmit={handleSubmit} mb={4}>
        <TextField
          label="Title"
          name="title"
          value={newProduct.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={newProduct.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={newProduct.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Add Product
        </Button>
      </Box>
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
