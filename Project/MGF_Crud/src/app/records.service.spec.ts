import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RecordsService } from './records.service';

describe('RecordsService', () => {
  let service: RecordsService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule ]});
    service = TestBed.inject(RecordsService);
   
  });
  
  it('should be named', () => {
    expect(service.componentName).toBe("RecordsService");
  });

  it('should get contacts',()=>{
    expect(service.getRecords()).toBeTruthy()
  })
  it('should get companies',()=>{
    expect(service.getCompanies()).toBeTruthy()
  })
  it('should get single contact with id 1',()=>{
    expect(service.getContact(0)).toBeTruthy()
  })
});
