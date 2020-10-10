import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-vehicle-management',
  templateUrl: './vehicle-management.component.html',
  styleUrls: ['./vehicle-management.component.less'],
})
export class VehicleManagementComponent implements OnInit {
  listOfVehicles: Vehicle[] = [];
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:3010/vehicle/getAll')
      .subscribe((response: { sucess: boolean; data: Vehicle[] }) => {
        console.log(response);
        this.listOfVehicles = response.data;
      });
  }
}
