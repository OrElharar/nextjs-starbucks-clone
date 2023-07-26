export function getSelectUserAuthDataQuery(): string{
    return `SELECT id, hashed_password AS "hashedPassword", first_name AS "firstName", last_name AS "lastName"
            FROM users 
            WHERE id = $1`
}
