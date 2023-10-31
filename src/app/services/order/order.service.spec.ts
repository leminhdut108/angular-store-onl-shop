import { TestBed } from '@angular/core/testing';

import { OrderService } from './confirmation.service';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderService);
  });

  it('OrderService should be created', () => {
    expect(service).toBeTruthy();
  });
});
