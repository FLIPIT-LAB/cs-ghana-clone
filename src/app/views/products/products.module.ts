import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ASLANComponent } from './aslan/aslan.component';
import { BankingComponent } from './banking/banking.component';
import { BulkPayComponent } from './bulk-pay/bulk-pay.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutDemoComponent } from './checkout-demo/checkout-demo.component';
import { InvoicingComponent } from './invoicing/invoicing.component';
import { CollectPaymentComponent } from './collect-payment/collect-payment.component';
import { PaymentLinksComponent } from './payment-links/payment-links.component';
import { PensionComponent } from './pension/pension.component';
import { RequestToPayComponent } from './request-to-pay/request-to-pay.component';
import { SmsComponent } from './sms/sms.component';
import { TransferComponent } from './transfer/transfer.component';
import { UssdComponent } from './ussd/ussd.component';
import { UssdDemoComponent } from './ussd-demo/ussd-demo.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [
  ASLANComponent, BankingComponent, BulkPayComponent, CheckoutComponent, CheckoutDemoComponent, SmsComponent,
  CollectPaymentComponent, InvoicingComponent, PaymentLinksComponent, PensionComponent, RequestToPayComponent,
  TransferComponent, UssdComponent,  UssdDemoComponent, UtilitiesComponent
]
@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [components]
})
export class ProductsModule { }
