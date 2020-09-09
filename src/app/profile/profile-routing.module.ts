import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileDetailComponent } from './detail/profile-detail.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'detail', component: ProfileDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
