import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSelectQuantityComponent } from './option-select-quantity.component';
import { FormsModule } from '@angular/forms';

describe('OptionSelectQuantityComponent', () => {
  let component: OptionSelectQuantityComponent;
  let fixture: ComponentFixture<OptionSelectQuantityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [],
      declarations: [OptionSelectQuantityComponent]
    });
    fixture = TestBed.createComponent(OptionSelectQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
