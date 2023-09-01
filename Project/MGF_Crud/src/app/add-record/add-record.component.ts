import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecordsService } from '../records.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent {
  addForm:any;
  componentName = "AddRecordComponent"
  constructor(private formBuilder:FormBuilder,
              private router:Router,
              private recordservice: RecordsService)
              {
                this.addForm = this.formBuilder.group({
                  f_id:['',Validators.required],
                  f_firstname:['',Validators.required],
                  f_lastname:['',Validators.required],
                  f_email:['',Validators.required],
                  f_companyid:['',Validators.required],
                })
              }

  ngOnInit(): void{

  }

  onSubmit(values:any){
    if(values.f_id == ''){alert("Id is required") ; return;}
   let formData = new FormData();
   formData.append('f_id' , values.f_id);
   formData.append('f_firstname' , values.f_firstname);
   formData.append('f_lastname' , values.f_lastname);
   formData.append('f_email' , values.f_email);
   formData.append('f_companyid' , values.f_companyid);


    this.recordservice.CreateContact(formData).subscribe(
      (result : any)=>{
        console.log("Response: "  + result )
         this.router.navigate(['/']);
      },
      error=>{
        alert(error);
      }
    )
  }

}
