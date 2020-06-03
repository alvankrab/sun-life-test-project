import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardExpPage } from './dashboard-exp.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardExpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardExpPageRoutingModule {}
