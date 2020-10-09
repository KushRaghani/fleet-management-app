import { config } from 'dotenv';
import { ConnectionOptions } from 'typeorm';
config();

const DatabaseConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
};

export default DatabaseConfig;
