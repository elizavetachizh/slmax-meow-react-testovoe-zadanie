"use client";

import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Box } from "@mui/material";
import { IProduct } from "@/src/data/products";

interface ProductEditorProps {
  product: IProduct;
  onSave: (product: IProduct) => void;
}

export default function ProductEditor({ product, onSave }: ProductEditorProps) {
  const [editedProduct, setEditedProduct] = useState<IProduct>(product);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };

  const handleSave = async () => {
    onSave(editedProduct);
    router.push("/products");
  };

  const handleBack = () => {
    router.push("/products");
  };

  return (
    <Box mt={2}>
      <TextField
        label="Title"
        name="title"
        value={editedProduct.title}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        name="description"
        value={editedProduct.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Price"
        name="price"
        type="number"
        value={editedProduct.price}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
      </Box>
    </Box>
  );
}
