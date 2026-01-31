import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestRoomInfoComponent } from './guest-room-info.component';

describe('GuestRoomInfoComponent', () => {
  let component: GuestRoomInfoComponent;
  let fixture: ComponentFixture<GuestRoomInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestRoomInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestRoomInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
