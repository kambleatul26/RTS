import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainsPageRoutingModule } from './trains-routing.module';

import { TrainsPage } from './trains.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainsPageRoutingModule
  ],
  declarations: [TrainsPage]
})
export class TrainsPageModule {}
