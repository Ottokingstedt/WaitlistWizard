import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { db } from './database';

// This script will automatically run all pending migrations
async function runMigrations() {
  console.log('Running migrations...');
  
  try {
    await migrate(db, { migrationsFolder: './migrations' });
    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

runMigrations().then(() => process.exit(0));