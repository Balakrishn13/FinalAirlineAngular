import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFlightmodelComponent } from './admin-flightmodel.component';

describe('AdminFlightmodelComponent', () => {
  let component: AdminFlightmodelComponent;
  let fixture: ComponentFixture<AdminFlightmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFlightmodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFlightmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
