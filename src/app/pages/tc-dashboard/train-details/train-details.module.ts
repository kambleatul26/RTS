import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainDetailsPageRoutingModule } from './train-details-routing.module';

import { TrainDetailsPage } from './train-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainDetailsPageRoutingModule
  ],
  declarations: [TrainDetailsPage]
})
export class TrainDetailsPageModule {}
