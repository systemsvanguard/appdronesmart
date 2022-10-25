import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DronesListComponent } from './components/drone_list/drone_list.component';
import { DroneDetailsComponent } from './components/drone_details/drone_details.component';
import { AddDroneComponent } from './components/drone_add/drone_add.component';

const routes: Routes = [
  { path: '', redirectTo: 'drones', pathMatch: 'full' },
  { path: 'drones', component: DronesListComponent },
  { path: 'drones/:id', component: DroneDetailsComponent },
  { path: 'add', component: AddDroneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }