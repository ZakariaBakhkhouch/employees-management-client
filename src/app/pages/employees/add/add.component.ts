import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Employee } from '../../../models/Employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../../services/employees.service';
import { DepartmentsService } from '../../../services/departments.service';
import { Department } from '../../../models/Department';

@Component({
  selector: 'app-add',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {

  Employee: Employee = {} as Employee;
  departments: Department[] = [];
  
  constructor(private employeeService: EmployeeService,
    private departmentsService: DepartmentsService,
    private router: Router
  ) 
  { }

  ngOnInit(): void {
    // Initialization logic can go here
    this.GetDepartments();
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log("Form Submitted:", this.Employee);
      // 👉 Here you could send data to your API/service
    } else {
      console.log("Form is invalid");
    }
  }

  AddEmployee(): void {
    // Logic to add an employee will go here
    this.employeeService.createEmployee(this.Employee).subscribe({
      next: (response) => {
        console.log('Employee added successfully:', response);
        // Optionally, redirect or reset the form
        this.router.navigate(['/employees']);
      },
      error: (err) => {
        console.error('Error adding employee', err);
      }
    });
    console.log('Add Employee button clicked');
  }

  GetDepartments(page: number = 1): void {
    this.departmentsService.getDepartments(page, 999).subscribe({
      next: (res) => {
        this.departments = res.data.data;
        console.log('Departments fetched successfully:', this.departments);
      },
      error: (err) => {
        alert('Error fetching departments');
      }
    });
  }
}
