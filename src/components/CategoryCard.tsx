import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

interface CategoryCardProps {
  title: string;
  description: string;
  path: string;
}

export default function CategoryCard({
  title,
  description,
  path,
}: CategoryCardProps) {
  const router = useRouter();
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push(`/${path}`)}
          fullWidth
        >
          Go to {title}
        </Button>
      </CardContent>
    </Card>
  );
}
