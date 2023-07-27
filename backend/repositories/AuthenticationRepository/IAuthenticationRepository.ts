export interface IAuthenticationRepository {
    getUserAuthData: (username: string) => Promise<{ id: string; hashedPassword: string, firstName: string, lastName: string }>;
}
