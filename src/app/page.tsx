"use client";
import { Container, Grid, Typography } from "@mui/material";
import CategoryCard from "@/src/components/CategoryCard";

export default function Home() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to Our Store
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <CategoryCard
            title={"Products"}
            description={"Browse and edit our product selection"}
            path={"products"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CategoryCard
            title={"Employees"}
            description={"Meet our team and leave feedback"}
            path={"employees"}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
