import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestToPayComponent } from './request-to-pay.component';

describe('RequestToPayComponent', () => {
  let component: RequestToPayComponent;
  let fixture: ComponentFixture<RequestToPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestToPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestToPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
