import React, { createContext, useContext, useState, ReactNode } from "react";
import { initialProducts, IProduct } from "@/src/data/products";
import { IEmployee, initialEmployees } from "@/src/data/employees";

interface AppContextType {
  products: IProduct[];
  employees: IEmployee[];
  updateProduct: (updatedProduct: IProduct) => void;
  updateEmployee: (updatedEmployee: IEmployee) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>(initialProducts);
  const [employees, setEmployees] = useState<IEmployee[]>(initialEmployees);

  const updateProduct = (updatedProduct: IProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product,
      ),
    );
  };

  const updateEmployee = (updatedEmployee: IEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee,
      ),
    );
  };

  return (
    <AppContext.Provider
      value={{ products, employees, updateProduct, updateEmployee }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
