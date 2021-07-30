import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ListGetwaysComponent } from './list-getways/list-getways.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateGetwayComponent } from './create-getway/create-getway.component';
import { FormsModule } from '@angular/forms';
import { GetwayDetailsComponent } from './getway-details/getway-details.component';
import { CreateDeviceComponent } from './create-device/create-device.component';

@NgModule({
  declarations: [
    AppComponent,
    ListGetwaysComponent,
    CreateGetwayComponent,
    GetwayDetailsComponent,
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
