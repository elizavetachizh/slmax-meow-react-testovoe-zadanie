import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { IEmployee } from "@/src/data/employees";

interface EmployeeCardProps {
  employee: IEmployee;
}

export default function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{employee.name}</Typography>
        <Typography variant="body2">{employee.position}</Typography>
        {employee.feedback?.map((fb, index) => (
          <Typography key={index} variant="body2">
            {fb}
          </Typography>
        ))}
      </CardContent>
      <Link href={`/employees/${employee.id}`}></Link>
    </Card>
  );
}
