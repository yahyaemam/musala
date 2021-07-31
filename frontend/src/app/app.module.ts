import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ListGatewaysComponent } from './list-gateways/list-gateways.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateGatewayComponent } from './create-gateway/create-gateway.component';
import { FormsModule } from '@angular/forms';
import { GatewayDetailsComponent } from './gateway-details/gateway-details.component';
import { CreateDeviceComponent } from './create-device/create-device.component';

@NgModule({
  declarations: [
    AppComponent,
    ListGatewaysComponent,
    CreateGatewayComponent,
    GatewayDetailsComponent,
    CreateDeviceComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
