import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { ServiceproductService } from './serviceproduct.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('ServiceproductService', () => {
  let service: ServiceproductService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({

       imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
