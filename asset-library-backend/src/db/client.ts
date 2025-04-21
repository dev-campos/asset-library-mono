import { Client } from 'pg';

const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

client.connect().catch(err => {
    console.error('Error connecting to database:', err);
    process.exit(1);
});

export default client; 