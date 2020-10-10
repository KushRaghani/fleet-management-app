import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { VehicleManagementComponent } from './vehicle-management/vehicle-management.component';
import { AppAntZorroModule } from '../app.ant-zorro.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VehicleManagementComponent],
  imports: [CommonModule, ReactiveFormsModule, AppAntZorroModule, RouterModule],
  exports: [VehicleRoutingModule],
})
export class VehicleModule {}
