import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDroneComponent } from './components/drone_add/drone_add.component';
import { DroneDetailsComponent } from './components/drone_details/drone_details.component';
import { DronesListComponent } from './components/drone_list/drone_list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDroneComponent,
    DroneDetailsComponent,
    DronesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
