import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';
import { BaseResponse } from '../models/BaseResponse';
import { DepartmentsListModel } from '../models/DepartmentsListModel';

// import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})

export class DepartmentsService {
  private apiUrl = 'http://localhost:5008/api/departments';

  constructor(private http: HttpClient) { }

  getDepartments(pageNumber: number, pageSize: number): Observable<DepartmentsListModel> {
    return this.http.get<DepartmentsListModel>(this.apiUrl+ `?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}
