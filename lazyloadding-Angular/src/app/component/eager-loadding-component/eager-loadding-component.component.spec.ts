import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerLoaddingComponentComponent } from './eager-loadding-component.component';

describe('EagerLoaddingComponentComponent', () => {
  let component: EagerLoaddingComponentComponent;
  let fixture: ComponentFixture<EagerLoaddingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EagerLoaddingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EagerLoaddingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
