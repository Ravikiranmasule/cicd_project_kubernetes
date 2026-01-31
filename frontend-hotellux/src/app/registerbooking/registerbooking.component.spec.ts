import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterbookingComponent } from './registerbooking.component';

describe('RegisterbookingComponent', () => {
  let component: RegisterbookingComponent;
  let fixture: ComponentFixture<RegisterbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
