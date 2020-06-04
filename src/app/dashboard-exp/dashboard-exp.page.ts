import { Component, OnInit } from '@angular/core';
import { CommonServicesService } from '../api/common-services.service';

@Component({
  selector: 'app-dashboard-exp',
  templateUrl: './dashboard-exp.page.html',
  styleUrls: ['./dashboard-exp.page.scss'],
})
export class DashboardExpPage implements OnInit {
  private policyMenu : any;
  constructor(private common: CommonServicesService) { }

  ngOnInit() {
    this.common.getJSON('../assets/mock-data/policy-menu.json').subscribe(data => {
      this.policyMenu = data.policyMenu;
      console.log(this.policyMenu);
      console.log(data.policyMenu);
     });
  }

}
