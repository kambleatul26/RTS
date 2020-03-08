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
        path: 'notifications',
        loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'indicator',
        loadChildren: () => import('./indicator/indicator.module').then( m => m.IndicatorPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'menu/home'
  },
  {
    path: 'train-details',
    loadChildren: () => import('./train-details/train-details.module').then( m => m.TrainDetailsPageModule)
  },
  {
    path: 'transfer-ownership',
    loadChildren: () => import('./transfer-ownership/transfer-ownership.module').then( m => m.TransferOwnershipPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassengerDashboardPageRoutingModule {}
