import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListProductsComponent } from './view-list-products.component';

describe('ViewListProductsComponent', () => {
  let component: ViewListProductsComponent;
  let fixture: ComponentFixture<ViewListProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
