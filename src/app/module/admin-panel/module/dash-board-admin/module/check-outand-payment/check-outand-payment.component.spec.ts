import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutandPaymentComponent } from './check-outand-payment.component';

describe('CheckOutandPaymentComponent', () => {
  let component: CheckOutandPaymentComponent;
  let fixture: ComponentFixture<CheckOutandPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutandPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutandPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
