import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { vehicleProviders } from './vehicle.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...vehicleProviders, VehicleService],
  exports: [...vehicleProviders, VehicleService],
  controllers: [VehicleController],
})
export class VehicleModule {}
