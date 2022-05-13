import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPnrsearchComponent } from './user-pnrsearch.component';

describe('UserPnrsearchComponent', () => {
  let component: UserPnrsearchComponent;
  let fixture: ComponentFixture<UserPnrsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPnrsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPnrsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
