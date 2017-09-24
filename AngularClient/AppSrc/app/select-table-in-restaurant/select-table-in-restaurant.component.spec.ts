import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTableInRestaurantComponent } from './select-table-in-restaurant.component';

describe('SelectTableInRestaurantComponent', () => {
  let component: SelectTableInRestaurantComponent;
  let fixture: ComponentFixture<SelectTableInRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTableInRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTableInRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
