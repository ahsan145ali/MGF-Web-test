import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReportComponent } from './report.component';

describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportComponent],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be', () => {
    expect(component.componentName).toBe("ReporComponent");
  });
});
