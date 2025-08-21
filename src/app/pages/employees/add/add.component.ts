import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Employee } from '../../../models/Employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../../services/employees.service';

@Component({
  selector: 'app-add',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {

  Employee: Employee = {} as Employee;
  
  constructor(private employeeService: EmployeeService,
    private router: Router
  ) 
  { }

  ngOnInit(): void {
    // Initialization logic can go here
  }

  AddEmployee(): void {
    // Logic to add an employee will go here
    this.Employee.departmentId = "3853a3c3-e154-4929-9d29-c093f49f4568";
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
}
