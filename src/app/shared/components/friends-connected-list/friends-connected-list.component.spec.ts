import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsConnectedListComponent } from './friends-connected-list.component';

describe('FriendsConnectedListComponent', () => {
  let component: FriendsConnectedListComponent;
  let fixture: ComponentFixture<FriendsConnectedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsConnectedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsConnectedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
