import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopersRoutingModule } from './developers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';

const components = [
  OverviewComponent,
]

@NgModule({
  declarations: [components],
  
  imports: [
    CommonModule,
    DevelopersRoutingModule,
    FontAwesomeModule,
    RouterModule,
    SharedModule
  ], 
  exports: [components]
})
export class DevelopersModule { }
