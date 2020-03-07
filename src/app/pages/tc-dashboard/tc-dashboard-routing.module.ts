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
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'train-details',
        loadChildren: () => import('./train-details/train-details.module').then(m => m.TrainDetailsPageModule)
      },
      {
        path: 'loc-list',
        loadChildren: () => import('./loc-list/loc-list.module').then(m => m.LocListPageModule)
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
export class TCDashboardPageRoutingModule { }
