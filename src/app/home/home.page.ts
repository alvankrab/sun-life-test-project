import { Component, OnInit } from '@angular/core';
import { CommonServicesService } from '../api/common-services.service';
import { CoverageModel } from '../models/coverage.model';
import { Assets } from '../models/assets.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private coverageList : CoverageModel[];
  private assets: Assets;
  private coverageCount: number;
  
  constructor(private common: CommonServicesService) {
    this.coverageCount = 0;
    this.assets = new Assets;
  }

  ngOnInit() {
    this.common.getJSON('../assets/mock-data/coverage.json').subscribe(data => {
      this.coverageList = data.coverage.map(p => ({
        id: p.id,
        title: p.title,
        description: p.description,
        imgUrl: p.imgUrl
      }));
      this.coverageCount = this.coverageList.length;
     });

     this.common.getJSON('../assets/mock-data/assets.json').subscribe(data => {
      this.assets.assetList = data.assets.assetList.map(p => ({
        id: p.id,
        name: p.name,
        value: p.value,
        currency: p.currency
      }))
      this.assets.total = data.assets.total;
     });

  }
}
