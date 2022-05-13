import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadFlightsComponent } from './load-flights.component';

describe('LoadFlightsComponent', () => {
  let component: LoadFlightsComponent;
  let fixture: ComponentFixture<LoadFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadFlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
