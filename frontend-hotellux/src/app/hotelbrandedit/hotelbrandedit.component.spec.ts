import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelbrandeditComponent } from './hotelbrandedit.component';

describe('HotelbrandeditComponent', () => {
  let component: HotelbrandeditComponent;
  let fixture: ComponentFixture<HotelbrandeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelbrandeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelbrandeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
