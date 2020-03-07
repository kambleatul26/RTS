import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainsPage } from './trains.page';

const routes: Routes = [
  {
    path: '',
    component: TrainsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainsPageRoutingModule {}
