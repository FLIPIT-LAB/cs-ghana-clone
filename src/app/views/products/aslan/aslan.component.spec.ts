import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASLANComponent } from './aslan.component';

describe('ASLANComponent', () => {
  let component: ASLANComponent;
  let fixture: ComponentFixture<ASLANComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASLANComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ASLANComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
