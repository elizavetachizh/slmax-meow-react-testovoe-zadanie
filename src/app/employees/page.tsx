"use client";
import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import EmployeeCard from "../../components/Employee/EmployeeCard";
import { useAppContext } from "@/src/context/AppContext";
import { useRouter } from "next/navigation";

export default function Products() {
  const { employees } = useAppContext();
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Our employees
      </Typography>
      <Button variant="outlined" onClick={handleBack}>
        Back
      </Button>
      <Grid container spacing={4}>
        {employees.map((employee) => (
          <Grid item key={employee.id} xs={12} sm={6} md={3}>
            <EmployeeCard employee={employee} />
            <Link href={`/employees/${employee.id}`} passHref>
              <Button variant="contained" color="primary" fullWidth>
                Add feedback to {employee.name}
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
