"use client";
import { Container, Typography } from "@mui/material";
import ProductEditor from "@/src/components/Product/ProductEditor";
import { useRouter } from "next/navigation";
import { IProduct } from "@/src/data/products";
import { useAppContext } from "@/src/context/AppContext";

interface ProductPageProps {
  params: { id: string };
}

export default function Product({ params }: ProductPageProps) {
  const productId = parseInt(params.id);
  const router = useRouter();
  const { products, updateProduct } = useAppContext();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleUpdateProduct = (updatedProduct: IProduct) => {
    updateProduct(updatedProduct);
    router.push("/");
  };

  return (
    <Container>
      <Typography variant="h4" component="h1">
        Edit {product.title}
      </Typography>
      <ProductEditor product={product} onSave={handleUpdateProduct} />
    </Container>
  );
}
