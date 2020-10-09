import { Body, Controller, Post } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { AddVehicleDto } from './dto/addVehicle.dto';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post('/add')
  async addVehicle(@Body() body: AddVehicleDto) {
    const vehicle = await this.vehicleService.addVehicle({ ...body });
    return {
      success: true,
      ...vehicle,
    };
  }
}
