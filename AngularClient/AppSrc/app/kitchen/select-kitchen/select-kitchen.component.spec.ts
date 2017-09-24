import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectKitchenComponent } from './select-kitchen.component';

describe('SelectKitchenComponent', () => {
  let component: SelectKitchenComponent;
  let fixture: ComponentFixture<SelectKitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectKitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
