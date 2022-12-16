import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
  { path: '', component: BlogComponent },
  // { path: 'details', component: BlogDetailsComponent },
  { path: 'view/:id', component: BlogDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
