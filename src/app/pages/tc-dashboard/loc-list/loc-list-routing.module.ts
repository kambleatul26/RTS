import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocListPage } from './loc-list.page';

const routes: Routes = [
  {
    path: '',
    component: LocListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocListPageRoutingModule {}
