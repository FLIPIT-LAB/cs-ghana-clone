import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopFriendlyComponent } from './develop-friendly.component';

describe('DevelopFriendlyComponent', () => {
  let component: DevelopFriendlyComponent;
  let fixture: ComponentFixture<DevelopFriendlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopFriendlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopFriendlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
