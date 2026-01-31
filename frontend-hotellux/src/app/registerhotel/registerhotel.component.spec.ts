import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterhotelComponent } from './registerhotel.component';

describe('RegisterhotelComponent', () => {
  let component: RegisterhotelComponent;
  let fixture: ComponentFixture<RegisterhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterhotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
