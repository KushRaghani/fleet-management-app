import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleManagementComponent } from './vehicle-management/vehicle-management.component';

const routes: Routes = [{ path: '', component: VehicleManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleRoutingModule {}
