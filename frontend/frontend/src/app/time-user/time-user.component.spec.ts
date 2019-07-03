import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeUserComponent } from './time-user.component';

describe('TimeUserComponent', () => {
  let component: TimeUserComponent;
  let fixture: ComponentFixture<TimeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
