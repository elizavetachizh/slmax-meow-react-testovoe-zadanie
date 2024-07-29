"use client";
import { Container, Typography } from "@mui/material";
import EmployeeEditor from "@/src/components/Employee/EmployeeEditor";
import { useAppContext } from "@/src/context/AppContext";

interface EmployeePageProps {
  params: { id: string };
}

export default function Employee({ params }: EmployeePageProps) {
  const employeeId = parseInt(params.id);
  const { employees, addEmployeeFeedback } = useAppContext();
  const employee = employees.find((p) => p.id === employeeId);

  if (!employee) {
    return <div>Employee not found</div>;
  }
  const handleAddFeedback = (feedback: string) => {
    addEmployeeFeedback(employeeId, feedback);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1">
        Edit {employee.name}
      </Typography>
      <Typography>{employee.position}</Typography>
      <EmployeeEditor employee={employee} onAddFeedback={handleAddFeedback} />
    </Container>
  );
}
