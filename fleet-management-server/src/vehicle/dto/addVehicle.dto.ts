export class AddVehicleDto {
  readonly title: string;
  readonly vin: string;
  readonly model: string;
  readonly sub_model: string;
  readonly vehicle_plate: string;
  readonly odometer: string;
  readonly unit_id: string;
  readonly status: string;
  readonly type: string;
  readonly manufacturer: string;
  readonly year: string;
  readonly last_maintainence_date: Date;
  readonly created_by: string;
  readonly updated_by: string;
}
