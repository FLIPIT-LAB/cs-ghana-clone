import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogDetailsComponent } from '../blog/blog-details/blog-details.component';
import { BlogComponent } from '../blog/blog/blog.component';
import { CareersComponent } from './careers/careers.component';
import { CompanyPressComponent } from './company-press/company-press.component';
import { ContactSalesComponent } from './contact-sales/contact-sales.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

export const routes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'pricing', component: BlogDetailsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'press', component: CompanyPressComponent },
  { path: 'sales', component: ContactSalesComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'help-center', component: HelpCenterComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
