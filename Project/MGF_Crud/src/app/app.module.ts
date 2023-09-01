import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { ListRecordsComponent } from './list-records/list-records.component';
import { UpdateRecordsComponent } from './update-records/update-records.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ReportComponent } from './report/report.component';
@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    ListRecordsComponent,
    UpdateRecordsComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
