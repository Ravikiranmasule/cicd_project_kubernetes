import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterhotelbrandComponent } from './registerhotelbrand.component';

describe('RegisterhotelbrandComponent', () => {
  let component: RegisterhotelbrandComponent;
  let fixture: ComponentFixture<RegisterhotelbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterhotelbrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterhotelbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
