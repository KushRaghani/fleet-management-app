import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AddVehicleDto } from './dto/addVehicle.dto';

import { Vehicle } from './vehicle.entity';

@Injectable()
export class VehicleService {
  constructor(
    @Inject('VEHICLE_REPOSITORY')
    private readonly repository: Repository<Vehicle>,
  ) {}

  async findOne(id: number): Promise<Vehicle> {
    return await this.repository
      .createQueryBuilder('vehicle')
      //.addSelect('*')
      .where('vehicle.id=:id', { id })
      .getOne();
  }

  async findAll(): Promise<Vehicle[]> {
    return await this.repository.createQueryBuilder('vehicle').execute();
  }

  async addVehicle(addVehicleData: AddVehicleDto): Promise<Vehicle> {
    const inserted = await this.repository
      .createQueryBuilder()
      .insert()
      .values({
        ...addVehicleData,
      })
      .execute();
    return await this.findOne(inserted.identifiers[0].id);
  }
}
