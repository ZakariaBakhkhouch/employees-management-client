export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;  // ISO string from backend
  hireDate: Date;
  department: string;
  salary: number;
  position: string;
  departmentId: string;
  address: string;
  phoneNumber: string;
}
