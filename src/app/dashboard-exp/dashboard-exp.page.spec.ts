import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardExpPage } from './dashboard-exp.page';

describe('DashboardExpPage', () => {
  let component: DashboardExpPage;
  let fixture: ComponentFixture<DashboardExpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardExpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardExpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
