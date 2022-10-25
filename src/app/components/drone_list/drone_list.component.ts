import { Component, OnInit } from '@angular/core';
import { Drone } from 'src/app/models/drone.model';
import { DroneService } from 'src/app/services/drone.service';

@Component({
  selector: 'app-drone_list',
  templateUrl: './drone_list.component.html',
  styleUrls: ['./drone_list.component.css']
})
export class DronesListComponent implements OnInit {

  drones?: Drone[];
  currentDrone: Drone = {};
  currentIndex = -1;
  title = '';

  constructor(private droneService: DroneService) { }

  ngOnInit(): void {
    this.retrieveDrones();
  }

  retrieveDrones(): void {
    this.droneService.getAll()
      .subscribe({
        next: (data) => {
          this.drones = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveDrones();
    this.currentDrone = {};
    this.currentIndex = -1;
  }

  setActiveDrone(drone: Drone, index: number): void {
    this.currentDrone = drone;
    this.currentIndex = index;
  }

  removeAllDrones(): void {
    this.droneService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentDrone = {};
    this.currentIndex = -1;

    this.droneService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.drones = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}