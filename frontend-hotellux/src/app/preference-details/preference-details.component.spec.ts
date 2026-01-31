import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceDetailsComponent } from './preference-details.component';

describe('PreferenceDetailsComponent', () => {
  let component: PreferenceDetailsComponent;
  let fixture: ComponentFixture<PreferenceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferenceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
