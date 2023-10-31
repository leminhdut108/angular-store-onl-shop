import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemDetailComponent } from './product-item-detail.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { OptionSelectQuantityComponent } from '../option-select-quantity/option-select-quantity.component';
import { FormsModule } from '@angular/forms';

describe('ProductItemDetailComponent', () => {
  let component: ProductItemDetailComponent;
  let fixture: ComponentFixture<ProductItemDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get() {
                  return '12';
                }
              }
            }
          }
        }
      ],
      declarations: [ProductItemDetailComponent, OptionSelectQuantityComponent]
    });
    fixture = TestBed.createComponent(ProductItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
