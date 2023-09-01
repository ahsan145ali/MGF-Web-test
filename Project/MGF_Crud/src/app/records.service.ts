import { Injectable } from '@angular/core';
import {HttpClient,HttpParams } from '@angular/common/http';
import { Contacts } from './Contacts';
import { Companies } from './Companies';
@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  componentName = "RecordsService";
  constructor(private http:HttpClient) { }

  baseUrl:string = "http://localhost/MGF/phpRestApi/";
  
  getRecords(){
    return this.http.get<Contacts[]>(this.baseUrl+'view_all.php')
  }

  getContact(id:any){
    return this.http.get<Contacts[]>(this.baseUrl+'view_one.php?id='+id)
  }
  getCompanies(){
    return this.http.get<Companies[]>(this.baseUrl+'view_companies.php')
  }

  CreateContact(contact:any){
    return this.http.post(this.baseUrl+'insert.php',contact)
  }
  EditContact(contact:any){
    return this.http.post(this.baseUrl+'update.php',contact)
  }
}
