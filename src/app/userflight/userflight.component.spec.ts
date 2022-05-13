import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserflightComponent } from './userflight.component';

describe('UserflightComponent', () => {
  let component: UserflightComponent;
  let fixture: ComponentFixture<UserflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
