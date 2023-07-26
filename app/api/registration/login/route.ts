import { NextResponse } from "next/server";
import errorHandler from "@/app/api/_error";
import {NextApiResponse} from "next";
import authenticationService from "@/backend/services/AuthenticationService";

export async function POST(req: Request, res: NextApiResponse) {
    try{
        const body = await req.json()
        const userId = await authenticationService.authenticate({username: body.username, password: body.password});
        console.log({userId});
        return NextResponse.json({ message: "Login success" });
    }catch (err){
        return errorHandler(err, req, res);
    }

}
