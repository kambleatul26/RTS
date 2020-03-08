import { AuthGuard } from './shared/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'tc-dashboard',
    loadChildren: () => import('./pages/tc-dashboard/tc-dashboard.module').then( m => m.TCDashboardPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'TC'
    }
  },
  {
    path: 'passenger-dashboard',
    loadChildren: () => import('./pages/passenger-dashboard/passenger-dashboard.module').then( m => m.PassengerDashboardPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'PASS'
    }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
