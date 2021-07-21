import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsproduitbycategoryComponent } from './detailsproduitbycategory.component';

describe('DetailsproduitbycategoryComponent', () => {
  let component: DetailsproduitbycategoryComponent;
  let fixture: ComponentFixture<DetailsproduitbycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsproduitbycategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsproduitbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
