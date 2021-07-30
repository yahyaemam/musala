import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGetwaysComponent } from './list-getways/list-getways.component';
import { CreateGetwayComponent } from './create-getway/create-getway.component';
import { GetwayDetailsComponent } from './getway-details/getway-details.component';
import { CreateDeviceComponent } from './create-device/create-device.component';

const routes: Routes = [
  { path: 'getways', component: ListGetwaysComponent },
  { path: 'add-getway', component:   CreateGetwayComponent},
  { path: 'getway-details/:serial', component:   GetwayDetailsComponent},
  { path: 'add-device/:serial', component:   CreateDeviceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
