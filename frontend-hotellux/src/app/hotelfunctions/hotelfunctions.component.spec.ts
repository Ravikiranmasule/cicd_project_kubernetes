import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelfunctionsComponent } from './hotelfunctions.component';

describe('HotelfunctionsComponent', () => {
  let component: HotelfunctionsComponent;
  let fixture: ComponentFixture<HotelfunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelfunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelfunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
