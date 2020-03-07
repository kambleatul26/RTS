import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocListPageRoutingModule } from './loc-list-routing.module';

import { LocListPage } from './loc-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocListPageRoutingModule
  ],
  declarations: [LocListPage]
})
export class LocListPageModule {}
