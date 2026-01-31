import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterroomComponent } from './registerroom.component';

describe('RegisterroomComponent', () => {
  let component: RegisterroomComponent;
  let fixture: ComponentFixture<RegisterroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
