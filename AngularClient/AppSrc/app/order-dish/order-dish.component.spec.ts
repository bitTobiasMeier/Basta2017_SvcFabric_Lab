import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDishComponent } from './order-dish.component';

describe('OrderDishComponent', () => {
  let component: OrderDishComponent;
  let fixture: ComponentFixture<OrderDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
