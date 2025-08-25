import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';
import { BaseResponse } from '../models/BaseResponse';
import { DepartmentsListModel } from '../models/DepartmentsListModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DepartmentsService {
  private apiUrl =  environment.apiBaseUrl + '/departments';

  constructor(private http: HttpClient) { }

  getDepartments(pageNumber: number, pageSize: number): Observable<DepartmentsListModel> {
    return this.http.get<DepartmentsListModel>(this.apiUrl+ `?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}
