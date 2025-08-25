import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';
import { BaseResponse } from '../models/BaseResponse';
import { EmployeeListModel } from '../models/EmployeesListModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private apiUrl = environment.apiBaseUrl + '/employees';

  constructor(private http: HttpClient) { }

  getEmployees(pageNumber: number, pageSize: number): Observable<EmployeeListModel> {
    return this.http.get<EmployeeListModel>(this.apiUrl+ `?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/${employee.id}`, employee);
  }

  createEmployee(employee: Employee): Observable<BaseResponse> {
    return this.http.post<BaseResponse>(this.apiUrl, employee);
  }

  deleteEmployee(id: string): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>(`${this.apiUrl}/${id}`);
  }

  deleteAllEmployees(): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>(this.apiUrl);
  }
}
