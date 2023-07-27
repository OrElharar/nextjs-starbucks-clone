import {NextApiResponse} from "next";
import usersService from "@/backend/services/UsersService/UsersService";
import {NextResponse} from "next/server";
import errorHandler from "@/app/api/_error";
import authenticationService from "@/backend/services/AuthenticationService/AuthenticationService";

export async function POST(req: Request, res: NextApiResponse) {
    try{
        const body = await req.json()
        const data = {
            username: body.username,
            password: body.password,
            firstName: body.firstName,
            lastName: body.lastName
        }
        const user = await usersService.createUser(data);
        const token = authenticationService.generateControlPanelToken(user.id);
        return NextResponse.json({ data:{user, token} });
    }catch (err){
        return errorHandler(err, req, res);
    }

}
