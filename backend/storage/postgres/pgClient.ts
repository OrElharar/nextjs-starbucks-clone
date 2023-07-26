import { PostgresAdapter } from "@/backend/storage/postgres/PostgresAdapter";

const pgClient = new PostgresAdapter({
    host: process.env.POSTGRES_ADDR || "",
    database: process.env.DB_NAME || "db",
    user: process.env.DB_USERNAME || "user",
    password: process.env.DB_PASSWORD || "",
    max: 25,
    min: 4,
    connectionTimeoutMillis: 10000
});

pgClient.testConnection()
    .then(res => console.log("Postgres connection test: ", res))
    .catch(err => console.log("Postgres connection test error: ", err));

export default pgClient;
