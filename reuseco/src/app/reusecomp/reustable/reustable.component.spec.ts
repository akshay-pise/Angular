import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReustableComponent } from './reustable.component';

describe('ReustableComponent', () => {
  let component: ReustableComponent;
  let fixture: ComponentFixture<ReustableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReustableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReustableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
