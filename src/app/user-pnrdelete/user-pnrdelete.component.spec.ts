import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPnrdeleteComponent } from './user-pnrdelete.component';

describe('UserPnrdeleteComponent', () => {
  let component: UserPnrdeleteComponent;
  let fixture: ComponentFixture<UserPnrdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPnrdeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPnrdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
