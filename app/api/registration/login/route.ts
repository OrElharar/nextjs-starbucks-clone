import { NextResponse } from "next/server";
import errorHandler from "@/app/api/_error";
import {NextApiResponse} from "next";
import authenticationService from "@/backend/services/AuthenticationService/AuthenticationService";

export async function POST(req: Request, res: NextApiResponse) {
    try{
        const body = await req.json()
        const user = await authenticationService.authenticate({username: body.username, password: body.password});
        const token = authenticationService.generateControlPanelToken(user.id);
        return NextResponse.json({ data:{user, token} });
    }catch (err){
        return errorHandler(err, req, res);
    }

}
