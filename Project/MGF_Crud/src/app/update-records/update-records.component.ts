import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordsService } from '../records.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-records',
  templateUrl: './update-records.component.html',
  styleUrls: ['./update-records.component.scss']
})
export class UpdateRecordsComponent {

  componentName = "UpdateRecordsComponent";
  addForm:any;
  student_id: any;
  constructor(private formBuilder:FormBuilder,
              private router:Router,
              private recordservice: RecordsService,
              private url:ActivatedRoute)
              {
                this.addForm = this.formBuilder.group({
                  f_id:['',Validators.required, ],
                  f_firstname:['',Validators.required],
                  f_lastname:['',Validators.required],
                  f_email:['',Validators.required],
                  f_companyid:['',Validators.required],
                })
              }

  ngOnInit(): void{
    //this.addForm.get('f_id').disable();
    this.student_id = this.url.snapshot.params;
  
    if(this.student_id['id'] != null){

        this.recordservice.getContact(this.student_id['id']).subscribe(
          (data:any)=>{
              const serverData={
                f_id : data["id"],
                f_firstname:data['firstname'],
                f_lastname:data['lastname'],
                f_email:data['email'],
                f_companyid:data['company_id']
              }
              this.addForm.patchValue(serverData)
          }
        )
    }
   // this.setAuthorized(this.data);
  }

  onSubmit(values:any){
   console.log("Form: " , values);
   let formData = new FormData();
   formData.append('f_id' , values.f_id);
   formData.append('f_firstname' , values.f_firstname);
   formData.append('f_lastname' , values.f_lastname);
   formData.append('f_email' , values.f_email);
   formData.append('f_companyid' , values.f_companyid);
   console.log("FormData: " , formData);

    this.recordservice.EditContact(formData).subscribe(
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
