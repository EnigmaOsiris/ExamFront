import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from './models/Employee';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl="https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/";
  constructor(private http:HttpClient) { }


  public getAllEmployees():Observable<Employee[]>{
    return this.http.get(`${this.baseUrl}employees/osiris`).pipe(map((res:any)=>res.data.employees))
  }

  public addEmployee(employee:Employee):Observable<any>{
    return this.http.post(`${this.baseUrl}employees/osiris`,employee);
  }

  public getAllGroups():Observable<Employee[]>{
    return this.http.get(`${this.baseUrl}groups/osiris`).pipe(map((res:any)=>res.data.groups))
  }

  public getEmployeesByGroup(groupId:number):Observable<Employee[]>{
    return this.http.get(`${this.baseUrl}employees/osiris/getByGroup?id=${groupId}`).pipe(map((res:any)=>res.data.employees))
  }

}
