import mysql from 'mysql2/promise';
import { URL } from 'url';

async function applyMigration() {
  let connection;
  try {
    // Parse DATABASE_URL
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
      throw new Error('DATABASE_URL environment variable not set');
    }

    const url = new URL(dbUrl);
    const connectionConfig = {
      host: url.hostname,
      user: url.username,
      password: url.password,
      database: url.pathname.slice(1),
      port: url.port || 3306,
      ssl: url.searchParams.get('ssl') ? JSON.parse(url.searchParams.get('ssl')) : true,
    };

    console.log(`Connecting to ${connectionConfig.host}:${connectionConfig.port}/${connectionConfig.database}`);
    connection = await mysql.createConnection(connectionConfig);
    
    console.log('✓ Connected to database\n');
    
    // Apply the approval system migration
    const migrationSQL = [
      "ALTER TABLE `bookings` ADD `approvalStatus` enum('pending','approved','rejected') DEFAULT 'pending' NOT NULL;",
      "ALTER TABLE `bookings` ADD `approvalNotes` text;",
      "ALTER TABLE `bookings` ADD `approvedAt` timestamp;",
      "ALTER TABLE `bookings` ADD `approvedBy` int;"
    ];
    
    for (const sql of migrationSQL) {
      try {
        console.log(`Executing: ${sql}`);
        await connection.execute(sql);
        console.log('✓ Migration step completed\n');
      } catch (error) {
        // Column might already exist, which is fine
        if (error.code === 'ER_DUP_FIELDNAME') {
          console.log('✓ Column already exists (skipped)\n');
        } else {
          throw error;
        }
      }
    }
    
    console.log('✓✓✓ Migration applied successfully! ✓✓✓');
    
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

applyMigration();
