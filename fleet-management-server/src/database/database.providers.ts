import { createConnection } from 'typeorm';
import DatabaseConfig from '../config/db.config';

export const dbProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection(DatabaseConfig),
  },
];
