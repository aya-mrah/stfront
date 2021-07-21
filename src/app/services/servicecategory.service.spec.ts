import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ServicecategoryService } from './servicecategory.service';

describe('ServicecategoryService', () => {
  let service: ServicecategoryService;
beforeEach(async () => {
    await TestBed.configureTestingModule({

       imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicecategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
