import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../overview/home/home.component';
import { ASLANComponent } from './aslan/aslan.component';
import { BankingComponent } from './banking/banking.component';
import { BulkPayComponent } from './bulk-pay/bulk-pay.component';
import { CheckoutDemoComponent } from './checkout-demo/checkout-demo.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CollectPaymentComponent } from './collect-payment/collect-payment.component';
import { InvoicingComponent } from './invoicing/invoicing.component';
import { PaymentLinksComponent } from './payment-links/payment-links.component';
import { PensionComponent } from './pension/pension.component';
import { RequestToPayComponent } from './request-to-pay/request-to-pay.component';
import { SmsComponent } from './sms/sms.component';
import { TransferComponent } from './transfer/transfer.component';
import { UssdDemoComponent } from './ussd-demo/ussd-demo.component';
import { UssdComponent } from './ussd/ussd.component';
import { UtilitiesComponent } from './utilities/utilities.component';

export const routes: Routes = [
  { path: '', component: ASLANComponent },
  { path: 'ASLAN', component: ASLANComponent },
  { path: 'banking', component: BankingComponent },
  { path: 'bulk-pay', component: BulkPayComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'checkout-demo', component: CheckoutDemoComponent },
  { path: 'collect-payment', component: CollectPaymentComponent },
  { path: 'invoicing', component: InvoicingComponent },
  { path: 'payment-links', component: PaymentLinksComponent },
  { path: 'pension', component: PensionComponent },
  { path: 'request-to-pay', component: RequestToPayComponent },
  { path: 'sms', component: SmsComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'ussd', component: UssdComponent },
  { path: 'ussd-demo', component: UssdDemoComponent },
  { path: 'utilities', component: UtilitiesComponent },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
