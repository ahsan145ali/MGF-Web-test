import { Component } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  componentName = "ReporComponent";
  companies:any;
  contacts: any;
  report:any;
  dictionary:any
  constructor(private recordservice: RecordsService){}
  ngOnInit():void{

    this.recordservice.getCompanies().subscribe(
      (data:any)=>{
        this.companies = data.reverse();
      }
    )

    this.recordservice.getRecords().subscribe(
      (data:any)=>{
        this.contacts = data.reverse();
      }
    )
   this.dictionary = {};
  }

  MakeReport(){
    for (const item of this.companies) {
      this.dictionary[item.postcode] = 0;
    }

    this.contacts.forEach((element:any)=>{
      this.companies.forEach((comp:any)=>{
        if(element.company_id == comp.id){ this.dictionary[comp.postcode] +=1 }
      })
     
   });

   this.MakeObjectArray();
}

MakeObjectArray(){
  let tempreport = []
  for (const key in this.dictionary) {
      let temp ={ postcode: key , contacts:this.dictionary[key]}
      tempreport.push(temp);
  }
  this.report = tempreport;
  console.log(this.report)
}

}

