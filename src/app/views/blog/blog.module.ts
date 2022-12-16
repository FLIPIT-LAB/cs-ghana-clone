import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from 'src/app/services/services.module';

const components = [
  BlogComponent,
  BlogDetailsComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    HttpClientModule,
    BlogRoutingModule,
    FormsModule,
    SharedModule,
    FontAwesomeModule,
    ServicesModule
  ]
})
export class BlogModule { }
