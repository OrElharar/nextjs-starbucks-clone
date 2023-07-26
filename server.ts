import pgClient from "@/backend/storage/postgres/pgClient";

pgClient.testConnection()
    .then(res => console.log("Postgres connection test: ", res))
    .catch(err => console.log("Postgres connection test error: ", err));
