export interface Vehicle {
  vehicle_id: string;
  vehicle_year: string;
  vehicle_vin: string;
  vehicle_vehicle_plate: string;
  vehicle_unit_id: string;
  vehicle_type: string;
  vehicle_model: string;
  vehicle_sub_model: string;
  vehicle_odomoter: string;
  vehicle_manufacturer: string;
  vehicle_status: string;

  vehicle_is_active: boolean;
  vehicle_is_archived: boolean;

  vehicle_last_maintainence_date;
  vehicle_created_by: string;
  vehicle_created_date_time: string;
  vehicle_updated_by: string;
  vehicle_updated_date_time: string;
}
