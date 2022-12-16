import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UssdDemoComponent } from './ussd-demo.component';

describe('UssdDemoComponent', () => {
  let component: UssdDemoComponent;
  let fixture: ComponentFixture<UssdDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UssdDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UssdDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
