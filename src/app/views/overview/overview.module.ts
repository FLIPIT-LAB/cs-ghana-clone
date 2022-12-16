import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewRoutingModule } from './overview-routing.module';
import { HomeComponent } from './home/home.component';
import { IntegrationComponent } from './integration/integration.component';
import { PricingComponent } from './pricing/pricing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { SharedModule } from 'src/app/shared/shared.module';


const components = [
  HomeComponent,
  IntegrationComponent,
  PricingComponent,
]

@NgModule({
  declarations: [components, ErrorComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    FontAwesomeModule,
    RouterModule,
    SharedModule
  ],
  exports: [components]
})
export class OverviewModule { }
