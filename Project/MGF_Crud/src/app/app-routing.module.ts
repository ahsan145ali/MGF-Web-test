import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRecordsComponent } from './list-records/list-records.component';
import { CommonModule } from '@angular/common';
import { AddRecordComponent } from './add-record/add-record.component';
import { UpdateRecordsComponent } from './update-records/update-records.component';
import { ReportComponent } from './report/report.component';

export const routes: Routes = [
 
  { path: '',component:ListRecordsComponent,pathMatch:'full' },
  { path: 'addContact',component:AddRecordComponent,pathMatch:'full' },
  { path: 'update/:id',component:UpdateRecordsComponent,pathMatch:'full' },
  { path: 'report',component:ReportComponent,pathMatch:'full' },
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations : []
})
export class AppRoutingModule { }
