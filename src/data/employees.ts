export interface IEmployee {
  id: number;
  name: string;
  position: string;
  feedback: string[];
}
export const initialEmployees: IEmployee[] = [
  {
    id: 1,
    name: "John Doe",
    position: "Manager",
    feedback: ["Great leader and team player."],
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Sales Associate",
    feedback: ["Excellent customer service skills."],
  },
  {
    id: 3,
    name: "Sam Wilson",
    position: "Cashier",
    feedback: ["Quick and efficient at the register."],
  },
  {
    id: 4,
    name: "Lisa Johnson",
    position: "Stock Clerk",
    feedback: ["Keeps the store well-organized."],
  },
  {
    id: 5,
    name: "Tom Brown",
    position: "Security Guard",
    feedback: ["Ensures the safety of customers and staff."],
  },
  {
    id: 6,
    name: "Sara Davis",
    position: "Customer Service",
    feedback: ["Resolves issues promptly and courteously."],
  },
  {
    id: 7,
    name: "Mark Lee",
    position: "Janitor",
    feedback: ["Keeps the premises clean and tidy."],
  },
  {
    id: 8,
    name: "Anna White",
    position: "Delivery Driver",
    feedback: ["Delivers orders quickly and accurately."],
  },
];
