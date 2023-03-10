import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';

export const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'overview', component: OverviewComponent },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopersRoutingModule { }
