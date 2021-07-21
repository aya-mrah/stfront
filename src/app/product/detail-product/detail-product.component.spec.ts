import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductComponent } from './detail-product.component';

import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import {ServiceproductService} from "../../services/serviceproduct.service";

describe('DetailProductComponent', () => {
  let component: DetailProductComponent;
  let fixture: ComponentFixture<DetailProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProductComponent ],
       imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
