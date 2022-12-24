import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardScrollerComponent } from './card-scroller.component';

describe('CardScrollerComponent', () => {
  let component: CardScrollerComponent;
  let fixture: ComponentFixture<CardScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardScrollerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
