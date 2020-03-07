import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassengerDashboardPage } from './passenger-dashboard.page';

const routes: Routes = [
  {
    path: 'menu',
    component: PassengerDashboardPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'trains',
        loadChildren: () => import('./trains/trains.module').then( m => m.TrainsPageModule)
      },
      {
        path: 'train-details',
        loadChildren: () => import('./train-details/train-details.module').then( m => m.TrainDetailsPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'menu/home'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassengerDashboardPageRoutingModule {}
