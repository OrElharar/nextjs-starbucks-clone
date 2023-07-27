export interface INewAccountFormProps {
    signIn: ({username, password, firstName, lastName}: {username: string, password: string, firstName: string, lastName: string}) => void
}
