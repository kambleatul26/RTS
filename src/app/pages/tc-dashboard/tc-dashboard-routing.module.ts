import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TCDashboardPage } from './tc-dashboard.page';

const routes: Routes = [
  {
    path: 'menu',
    component: TCDashboardPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'menu/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TCDashboardPageRoutingModule {}
