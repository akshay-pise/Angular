import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Http4Component } from './http4.component';

describe('Http4Component', () => {
  let component: Http4Component;
  let fixture: ComponentFixture<Http4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Http4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Http4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
