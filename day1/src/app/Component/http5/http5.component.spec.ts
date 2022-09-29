import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Http5Component } from './http5.component';

describe('Http5Component', () => {
  let component: Http5Component;
  let fixture: ComponentFixture<Http5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Http5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Http5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
