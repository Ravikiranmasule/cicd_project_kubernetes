import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelbrandComponent } from './hotelbrand.component';

describe('HotelbrandComponent', () => {
  let component: HotelbrandComponent;
  let fixture: ComponentFixture<HotelbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelbrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
