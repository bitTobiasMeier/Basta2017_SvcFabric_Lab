import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucardAdministrationComponent } from './menucard-administration.component';

describe('MenucardAdministrationComponent', () => {
  let component: MenucardAdministrationComponent;
  let fixture: ComponentFixture<MenucardAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenucardAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenucardAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
