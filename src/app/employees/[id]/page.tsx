"use client";
import { Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { IEmployee } from "@/src/data/employees";
import EmployeeEditor from "@/src/components/Employee/EmployeeEditor";
import { useAppContext } from "@/src/context/AppContext";

interface EmployeePageProps {
  params: { id: string };
}

export default function Employee({ params }: EmployeePageProps) {
  const employeeId = parseInt(params.id);
  const router = useRouter();
  const { employees, updateEmployee } = useAppContext();
  const employee = employees.find((p) => p.id === employeeId);

  if (!employee) {
    return <div>Employee not found</div>;
  }

  const handleUpdateEmployee = (updatedProduct: IEmployee) => {
    updateEmployee(updatedProduct);
    router.push("/");
  };

  return (
    <Container>
      <Typography variant="h4" component="h1">
        Edit {employee.name}
      </Typography>
      <EmployeeEditor employee={employee} onSave={handleUpdateEmployee} />
    </Container>
  );
}
