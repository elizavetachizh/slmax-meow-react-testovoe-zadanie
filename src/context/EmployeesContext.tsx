import React, { createContext, useContext, useState, ReactNode } from "react";
import { IEmployee, initialEmployees } from "@/src/data/employees";

interface EmployeesContextType {
  employees: IEmployee[];
  updateEmployee: (updatedEmployee: IEmployee) => void;
}

const EmployeesContext = createContext<EmployeesContextType | undefined>(
  undefined,
);

export const EmployeesProvider = ({ children }: { children: ReactNode }) => {
  const [employees, setEmployees] = useState<IEmployee[]>(initialEmployees);

  const updateEmployee = (updatedEmployee: IEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee,
      ),
    );
  };

  return (
    <EmployeesContext.Provider value={{ employees, updateEmployee }}>
      {children}
    </EmployeesContext.Provider>
  );
};

export const useEmployees = () => {
  const context = useContext(EmployeesContext);
  if (context === undefined) {
    throw new Error("useEmployees must be used within an EmployeesProvider");
  }
  return context;
};
