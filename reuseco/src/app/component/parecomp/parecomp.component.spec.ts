import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParecompComponent } from './parecomp.component';

describe('ParecompComponent', () => {
  let component: ParecompComponent;
  let fixture: ComponentFixture<ParecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParecompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
