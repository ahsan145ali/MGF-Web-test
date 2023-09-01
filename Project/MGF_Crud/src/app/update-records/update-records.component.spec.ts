import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UpdateRecordsComponent } from './update-records.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
describe('UpdateRecordsComponent', () => {
  let component: UpdateRecordsComponent;
  let fixture: ComponentFixture<UpdateRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRecordsComponent],
      imports: [HttpClientModule , RouterTestingModule , ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(UpdateRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be', () => {
    expect(component.componentName).toBe("UpdateRecordsComponent");
  });
 
});
