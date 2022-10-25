import { Component } from '@angular/core';
import { Drone } from 'src/app/models/drone.model';
import { DroneService } from 'src/app/services/drone.service';

@Component({
  selector: 'app-drone_add',
  templateUrl: './drone_add.component.html',
  styleUrls: ['./drone_add.component.css']
})
export class AddDroneComponent {

  drone: Drone = {
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
  submitted = false;

  constructor(private droneService: DroneService) { }

  saveDrone(): void {
    const data = {
      title: this.drone.title,
      brand: this.drone.brand,
      price: this.drone.price,
      asinid: this.drone.asinid,
      rating: this.drone.rating,
      stockqnty: this.drone.stockqnty,
      amazon_image: this.drone.amazon_image,
      amazon_url: this.drone.amazon_url,
      synopsis: this.drone.synopsis,
      description: this.drone.description
    };

    this.droneService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newDrone(): void {
    this.submitted = false;
    this.drone = {
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
  }

}
