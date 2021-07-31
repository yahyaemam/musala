import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGatewaysComponent } from './list-gateways/list-gateways.component';
import { CreateGatewayComponent } from './create-gateway/create-gateway.component';
import { GatewayDetailsComponent } from './gateway-details/gateway-details.component';
import { CreateDeviceComponent } from './create-device/create-device.component';

const routes: Routes = [
  { path: '', redirectTo: '/gateways', pathMatch: 'full' },
  { path: 'gateways', component: ListGatewaysComponent },
  { path: 'add-gateway', component:   CreateGatewayComponent},
  { path: 'gateway-details/:serial', component:   GatewayDetailsComponent},
  { path: 'add-device/:serial', component:   CreateDeviceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
