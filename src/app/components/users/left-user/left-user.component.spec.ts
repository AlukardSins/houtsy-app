import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftUserComponent } from './left-user.component';

describe('LeftUserComponent', () => {
  let component: LeftUserComponent;
  let fixture: ComponentFixture<LeftUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
