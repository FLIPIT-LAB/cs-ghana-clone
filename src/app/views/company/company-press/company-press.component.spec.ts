import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPressComponent } from './company-press.component';

describe('CompanyPressComponent', () => {
  let component: CompanyPressComponent;
  let fixture: ComponentFixture<CompanyPressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyPressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
