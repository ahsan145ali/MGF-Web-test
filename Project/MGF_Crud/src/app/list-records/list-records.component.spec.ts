import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecordsComponent } from './list-records.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

describe('ListRecordsComponent', () => {
  let component: ListRecordsComponent;
  let fixture: ComponentFixture<ListRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRecordsComponent],
      imports: [HttpClientModule , ReactiveFormsModule , FormsModule]
    });
    fixture = TestBed.createComponent(ListRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('contacts undefined before reading from database', () => {
      expect(component.contacts).toBeUndefined();
  });
});
