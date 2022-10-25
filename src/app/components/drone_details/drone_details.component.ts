import { Component, Input, OnInit } from '@angular/core';
import { DroneService } from 'src/app/services/drone.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Drone } from 'src/app/models/drone.model';

@Component({
  selector: 'app-drone_details',
  templateUrl: './drone_details.component.html',
  styleUrls: ['./drone_details.component.css']
})
export class DroneDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentDrone: Drone = {
    title: '',
    brand: '',
    price: '',
    asinid: '',
    rating: '',
    stockqnty: '',
    amazon_image: '',
    amazon_url: '',
    synopsis: '',
    description: '',
    published: false
  };

  message = '';

  constructor(
    private droneService: DroneService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getDrone(this.route.snapshot.params["id"]);
    }
  }

  getDrone(id: string): void {
    this.droneService.get(id)
      .subscribe({
        next: (data) => {
          this.currentDrone = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      title		: this.currentDrone.title,
      brand		: this.currentDrone.brand,
      price		: this.currentDrone.price,
      asinid	: this.currentDrone.asinid,
      rating	: this.currentDrone.rating,
      stockqnty	: this.currentDrone.stockqnty,
      amazon_image	: this.currentDrone.amazon_image,
      amazon_url: this.currentDrone.amazon_url,
      synopsis	: this.currentDrone.synopsis,
      description	: this.currentDrone.description,
      published: status
    };

    this.message = '';

    this.droneService.update(this.currentDrone.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentDrone.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateDrone(): void {
    this.message = '';

    this.droneService.update(this.currentDrone.id, this.currentDrone)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This drone was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteDrone(): void {
    this.droneService.delete(this.currentDrone.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/drones']);
        },
        error: (e) => console.error(e)
      });
  }

}
