import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainDetailsPage } from './train-details.page';

const routes: Routes = [
  {
    path: '',
    component: TrainDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainDetailsPageRoutingModule {}
