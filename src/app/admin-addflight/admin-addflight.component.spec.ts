import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddflightComponent } from './admin-addflight.component';

describe('AdminAddflightComponent', () => {
  let component: AdminAddflightComponent;
  let fixture: ComponentFixture<AdminAddflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
