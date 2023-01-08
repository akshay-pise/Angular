import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilChatComponent } from './profil-chat.component';

describe('ProfilChatComponent', () => {
  let component: ProfilChatComponent;
  let fixture: ComponentFixture<ProfilChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
