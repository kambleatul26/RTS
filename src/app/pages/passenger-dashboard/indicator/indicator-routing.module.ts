import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicatorPage } from './indicator.page';

const routes: Routes = [
  {
    path: '',
    component: IndicatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicatorPageRoutingModule {}
