import { BaseEntity } from 'src/shared/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Vehicle extends BaseEntity {
  @Column({ nullable: true, type: 'varchar' })
  vin: string;

  @Column({ nullable: true, type: 'varchar' })
  model: string;

  @Column({ nullable: true, type: 'varchar' })
  sub_model: string;

  @Column({ nullable: true, type: 'varchar' })
  vehicle_plate: string;

  @Column({ nullable: true, type: 'varchar' })
  unit_id: string;

  @Column({ nullable: true, type: 'varchar' })
  odomoter: string;

  @Column({ nullable: true, type: 'varchar' })
  engine: string;

  @Column({ nullable: true, type: 'varchar' })
  status: string;

  @Column({ nullable: true, type: 'varchar' })
  type: string;

  @Column({ nullable: true, type: 'varchar' })
  manufacturer: string;

  @Column({ nullable: true, type: 'varchar' })
  year: string;

  @Column({ nullable: true, type: 'timestamptz' })
  last_maintainence_date: Date;
}
