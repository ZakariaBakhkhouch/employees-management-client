import { Component } from '@angular/core';
import { Employee } from '../../../models/Employee';
import { EmployeeService } from '../../../services/employees.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-index',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})

export class IndexComponent {
  employees: Employee[] = [];

  pageNumber = 1;
  pageSize = 8;
  totalItems = 0;
  totalPages = 0;

  selectedEmployee: Employee = {} as Employee;
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.GetEmployees();
  }

  ShowEmployeeDetails(emp: Employee): void {
    this.selectedEmployee = emp;
    console.log('Selected Employee:', this.selectedEmployee);
  }

  DeleteEmployee(id: string): void {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (response) => {
        location.reload(); 
      },
      error: (err) => {
        console.error('Error deleting employee', err);
      }
    });
  }

  GetEmployees(page: number = 1): void {
    this.employeeService.getEmployees(page, this.pageSize).subscribe({
      next: (res) => {
        this.employees = res.data.data;
        this.pageNumber = res.data.pageNumber;
        this.pageSize = res.data.pageSize;
        this.totalItems = res.data.totalItems;
        this.totalPages = res.data.totalPages;
      },
      error: (err) => {
        console.error('Error fetching employees', err);
      }
    });
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.GetEmployees(page);
    }
  }

  UpdateEmployee(employee: Employee): void {
    this.employeeService.updateEmployee(employee).subscribe({
      next: (res) => {
        location.reload(); 
      },
      error: (err) => {
        console.error('Error updating employee', err);
      }
    });
  }
}
