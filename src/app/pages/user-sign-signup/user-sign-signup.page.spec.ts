import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserSignSignupPage } from './user-sign-signup.page';

describe('UserSignSignupPage', () => {
  let component: UserSignSignupPage;
  let fixture: ComponentFixture<UserSignSignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSignSignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserSignSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
