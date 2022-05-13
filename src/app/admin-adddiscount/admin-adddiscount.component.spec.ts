import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdddiscountComponent } from './admin-adddiscount.component';

describe('AdminAdddiscountComponent', () => {
  let component: AdminAdddiscountComponent;
  let fixture: ComponentFixture<AdminAdddiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAdddiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdddiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
