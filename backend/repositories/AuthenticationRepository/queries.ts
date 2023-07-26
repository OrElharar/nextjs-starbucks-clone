export function getSelectUserAuthDataQuery(): string{
    return `SELECT userid AS id, password AS "hashedPassword"
            FROM users WHERE userid = $1`
}
