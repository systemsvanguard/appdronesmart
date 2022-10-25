import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drone } from '../models/drone.model';

const portAPI   = "8083";
// const baseUrl = 'http://localhost:8083/api/drones';
const baseUrl = `http://localhost:${portAPI}/api/drones`;    // RESTful API backend address.

@Injectable({
  providedIn: 'root'
})
export class DroneService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Drone[]> {
    return this.http.get<Drone[]>(baseUrl);
  }

  get(id: any): Observable<Drone> {
    return this.http.get<Drone>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Drone[]> {
    return this.http.get<Drone[]>(`${baseUrl}?title=${title}`);
  }
}
