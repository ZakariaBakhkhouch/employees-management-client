import { Department } from "./Department";

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;  // ISO string from backend
  hireDate: Date;
  salary: number;
  position: string;
  departmentId: string;
  address: string;
  phoneNumber: string;
  department: Department;
}
