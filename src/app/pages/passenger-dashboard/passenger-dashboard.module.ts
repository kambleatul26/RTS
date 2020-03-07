import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassengerDashboardPageRoutingModule } from './passenger-dashboard-routing.module';

import { PassengerDashboardPage } from './passenger-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassengerDashboardPageRoutingModule
  ],
  declarations: [PassengerDashboardPage]
})
export class PassengerDashboardPageModule {}
