import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserSignSignupPageRoutingModule } from './user-sign-signup-routing.module';

import { UserSignSignupPage } from './user-sign-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserSignSignupPageRoutingModule
  ],
  declarations: [UserSignSignupPage]
})
export class UserSignSignupPageModule {}
