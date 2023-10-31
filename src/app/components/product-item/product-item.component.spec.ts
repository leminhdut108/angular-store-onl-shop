import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';
import { OptionSelectQuantityComponent } from '../option-select-quantity/option-select-quantity.component';
import { FormsModule } from '@angular/forms';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductItemComponent, OptionSelectQuantityComponent],
      imports: [FormsModule],
      providers: [],
    });
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
