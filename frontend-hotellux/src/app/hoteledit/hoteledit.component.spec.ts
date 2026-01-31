import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteleditComponent } from './hoteledit.component';

describe('HoteleditComponent', () => {
  let component: HoteleditComponent;
  let fixture: ComponentFixture<HoteleditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoteleditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
