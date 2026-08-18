import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'face_hauling',
});

const sql = `
ALTER TABLE \`bookings\` ADD \`approvalStatus\` enum('pending','approved','rejected') DEFAULT 'pending' NOT NULL;
ALTER TABLE \`bookings\` ADD \`approvalNotes\` text;
ALTER TABLE \`bookings\` ADD \`approvedAt\` timestamp;
ALTER TABLE \`bookings\` ADD \`approvedBy\` int;
`;

try {
  const statements = sql.split(';').filter(s => s.trim());
  for (const statement of statements) {
    if (statement.trim()) {
      console.log('Executing:', statement.trim());
      await connection.execute(statement.trim());
    }
  }
  console.log('Migration applied successfully!');
} catch (error) {
  console.error('Migration failed:', error);
  process.exit(1);
} finally {
  await connection.end();
}
