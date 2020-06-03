import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardExpPageRoutingModule } from './dashboard-exp-routing.module';

import { DashboardExpPage } from './dashboard-exp.page';

import { UserHeaderComponent } from '../user-header/user-header.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardExpPageRoutingModule
  ],
  declarations: [
    DashboardExpPage,
    UserHeaderComponent
  ]
})
export class DashboardExpPageModule {}
