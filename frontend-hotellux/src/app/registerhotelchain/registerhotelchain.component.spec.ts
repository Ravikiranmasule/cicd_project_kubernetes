import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterhotelchainComponent } from './registerhotelchain.component';

describe('RegisterhotelchainComponent', () => {
  let component: RegisterhotelchainComponent;
  let fixture: ComponentFixture<RegisterhotelchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterhotelchainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterhotelchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
