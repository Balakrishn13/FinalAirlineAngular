import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddairlineComponent } from './admin-addairline.component';

describe('AdminAddairlineComponent', () => {
  let component: AdminAddairlineComponent;
  let fixture: ComponentFixture<AdminAddairlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddairlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddairlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
