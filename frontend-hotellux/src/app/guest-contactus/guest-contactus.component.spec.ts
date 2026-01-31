import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestContactusComponent } from './guest-contactus.component';

describe('GuestContactusComponent', () => {
  let component: GuestContactusComponent;
  let fixture: ComponentFixture<GuestContactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestContactusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
