import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UssdComponent } from './ussd.component';

describe('UssdComponent', () => {
  let component: UssdComponent;
  let fixture: ComponentFixture<UssdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UssdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UssdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
