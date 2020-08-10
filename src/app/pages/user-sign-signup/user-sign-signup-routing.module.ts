import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSignSignupPage } from './user-sign-signup.page';

const routes: Routes = [
  {
    path: '',
    component: UserSignSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSignSignupPageRoutingModule {}
