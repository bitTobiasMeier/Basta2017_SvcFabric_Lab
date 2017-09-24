import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTablesComponent } from './restaurant-tables.component';

describe('RestaurantTablesComponent', () => {
  let component: RestaurantTablesComponent;
  let fixture: ComponentFixture<RestaurantTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
