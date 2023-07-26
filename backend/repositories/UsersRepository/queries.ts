export function getInsertUserQuery():string{
    return `INSERT INTO users (id, hashed_password, first_name, last_name)
            VALUES ($1, $2, $3, $4)
            RETURNING id, first_name as "firstName", last_name as "lastName" ;`
}
