"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Box, Typography } from "@mui/material";
import { IEmployee } from "@/src/data/employees";

interface EmployeeEditorProps {
  employee: IEmployee;
  onAddFeedback: (feedback: string) => void;
}

export default function EmployeeEditor({
  employee,
  onAddFeedback,
}: EmployeeEditorProps) {
  const [feedback, setFeedback] = useState("");
  const router = useRouter();

  const handleFeedbackChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFeedback(e.target.value);
  };
  const handleFeedbackSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddFeedback(feedback);
    setFeedback("");
  };

  const handleBack = () => {
    router.push("/employees");
  };

  return (
    <Box mt={2}>
      <Typography variant="h6" gutterBottom>
        Feedback:
      </Typography>
      {employee.feedback?.map((fb, index) => (
        <Typography key={index} variant="body1">
          - {fb}
        </Typography>
      ))}
      <form onSubmit={handleFeedbackSubmit}>
        <TextField
          label="Add Feedback"
          value={feedback}
          onChange={handleFeedbackChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Add Feedback
        </Button>
      </form>
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
      </Box>
    </Box>
  );
}
