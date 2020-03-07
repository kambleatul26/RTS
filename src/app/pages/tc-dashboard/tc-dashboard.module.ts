import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TCDashboardPageRoutingModule } from './tc-dashboard-routing.module';

import { TCDashboardPage } from './tc-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TCDashboardPageRoutingModule
  ],
  declarations: [TCDashboardPage]
})
export class TCDashboardPageModule {}
