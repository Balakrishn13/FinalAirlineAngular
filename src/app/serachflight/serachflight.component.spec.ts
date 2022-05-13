import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachflightComponent } from './serachflight.component';

describe('SerachflightComponent', () => {
  let component: SerachflightComponent;
  let fixture: ComponentFixture<SerachflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerachflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
