import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicatorPageRoutingModule } from './indicator-routing.module';

import { IndicatorPage } from './indicator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicatorPageRoutingModule
  ],
  declarations: [IndicatorPage]
})
export class IndicatorPageModule {}
