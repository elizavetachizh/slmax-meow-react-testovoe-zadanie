"use client";
import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Box } from "@mui/material";
import { IEmployee } from "@/src/data/employees";

interface EmployeeEditorProps {
  employee: IEmployee;
  onSave: (employee: IEmployee) => void;
}

export default function EmployeeEditor({
  employee,
  onSave,
}: EmployeeEditorProps) {
  const [editedEmployee, setEditedEmployee] = useState<IEmployee>(employee);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedEmployee);
    router.push("/employees");
  };

  const handleBack = () => {
    router.push("/employees");
  };

  return (
    <Box mt={2}>
      <TextField
        label="Name"
        name="name"
        value={editedEmployee.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Position"
        name="position"
        value={editedEmployee.position}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Feedback"
        name="feedback"
        value={editedEmployee.feedback}
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
