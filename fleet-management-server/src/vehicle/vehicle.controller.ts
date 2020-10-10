import { Body, Controller, Get, Post } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { AddVehicleDto } from './dto/addVehicle.dto';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get('/getAll')
  async getAllVehicles() {
    const vehicles = await this.vehicleService.findAll();
    return {
      success: true,
      data: vehicles,
    };
  }

  @Post('/add')
  async addVehicle(@Body() body: AddVehicleDto) {
    const vehicle = await this.vehicleService.addVehicle({ ...body });
    return {
      success: true,
      ...vehicle,
    };
  }
}
