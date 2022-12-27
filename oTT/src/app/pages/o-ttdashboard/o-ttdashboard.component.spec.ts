import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTTDashboardComponent } from './o-ttdashboard.component';

describe('OTTDashboardComponent', () => {
  let component: OTTDashboardComponent;
  let fixture: ComponentFixture<OTTDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OTTDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OTTDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
