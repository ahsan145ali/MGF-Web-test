import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AddRecordComponent } from './add-record.component';
import { ReactiveFormsModule } from '@angular/forms';
describe('AddRecordComponent', () => {
  let component: AddRecordComponent;
  let fixture: ComponentFixture<AddRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRecordComponent],
      imports: [HttpClientModule , ReactiveFormsModule]
      
    });
    fixture = TestBed.createComponent(AddRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be', () => {
    expect(component.componentName).toBe("AddRecordComponent");
  });
});
