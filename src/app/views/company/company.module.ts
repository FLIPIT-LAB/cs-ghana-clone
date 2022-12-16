import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from '../blog/blog/blog.component';
import { BlogDetailsComponent } from '../blog/blog-details/blog-details.component';
import { CareersComponent } from './careers/careers.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { CompanyPressComponent } from './company-press/company-press.component';
import { ContactSalesComponent } from './contact-sales/contact-sales.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

const components = [
  AboutUsComponent,
  CareersComponent,
  HelpCenterComponent,
  CompanyPressComponent,
  ContactSalesComponent,
  ContactUsComponent,
  TermsAndConditionsComponent
]
@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [components]
})
export class CompanyModule { }
