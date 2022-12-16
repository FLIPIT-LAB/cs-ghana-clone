import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkPayComponent } from './bulk-pay.component';

describe('BulkPayComponent', () => {
  let component: BulkPayComponent;
  let fixture: ComponentFixture<BulkPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
