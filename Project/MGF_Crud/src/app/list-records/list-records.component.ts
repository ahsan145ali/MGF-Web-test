import { Component } from '@angular/core';
import { RecordsService } from '../records.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-records',
  templateUrl: './list-records.component.html',
  styleUrls: ['./list-records.component.scss']
})
export class ListRecordsComponent {
  selectedField: string = 'id'; // Default selected field
  data: string = ''; // Input data
  contacts: any; // store contacts
  originalContacts : any; // original state of contacts
  addForm:any; // form control
  currentOrder:any; // use for sorting
  constructor(private recordservice: RecordsService , private formBuilder:FormBuilder,){

    this.addForm = this.formBuilder.group({
      f_id:['',Validators.required],
      f_email:['',Validators.required],
    })
    this.currentOrder = "asc";
  }

  ngOnInit():void{
    
    this.recordservice.getRecords().subscribe(
      (data:any)=>{
        console.log(data);
        this.contacts = data.reverse();
        this.originalContacts = this.contacts;
        console.log(this.contacts)
      }
    )
  }

  deleteRecord(record:any){
    //Removing the contact
  this.contacts.forEach((element: { id: any; },index: string | number)=>{
     if(element.id==record.id) delete this.contacts[index];
  });
  
  this.removeEmptyContacts();
  }
  removeEmptyContacts() { // remove empty contact from the list
    this.contacts = this.contacts.filter((contact: { id: null; firstname: null; lastname: null; email: null; company_id: null; }) => {
      return (
        contact.id !== null 
      );
    });
  }
  
  isEmptyContact(contact:any): boolean { // check if current contact is empty
    return (
      !contact.id
    );
  }
 

  Filter(){
    let temp=[{}]
    if(this.data!=''){
      this.originalContacts.forEach((element:any)=>
      {
         if(element[this.selectedField.toString()]==this.data){ temp.push(element)}
     
      });
      this.contacts = temp
    }
  }
  Sort(order:string){
    if(order == "asc"){ // ascending order
      if(this.currentOrder == "des"){
        this.contacts = this.contacts.reverse();
        this.currentOrder = "asc";
      }
    }
    else if(order == "des"){ // descending order
      if(this.currentOrder == "asc"){
        this.currentOrder = "des";
        this.contacts = this.contacts.reverse();
      }
    } 
  }


 
  
}
