import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './views/overview/error/error.component';
import { HomeComponent } from './views/overview/home/home.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./views/overview/overview.module').then( m => m.OverviewModule) },
  { path: 'auth', loadChildren: () => import('./views/auth/auth.module').then( m => m.AuthModule) },
  { path: 'company', loadChildren: () => import('./views/company/company.module').then( m => m.CompanyModule) },
  { path: 'products', loadChildren: () => import('./views/products/products.module').then( m => m.ProductsModule) },
  { path: 'developers', loadChildren: () => import('./views/developers/developers.module').then( m => m.DevelopersModule) },
  { path: 'blog', loadChildren: () => import('./views/blog/blog.module').then( m => m.BlogModule) },
  {path: '404', component: ErrorComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
