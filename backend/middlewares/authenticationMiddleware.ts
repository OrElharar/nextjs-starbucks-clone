import { NextApiResponse, NextApiRequest } from 'next';
import {NextResponse} from "next/server";
import errorHandler from "@/app/api/_error";
import authenticationService from "@/backend/services/AuthenticationService/AuthenticationService";
import {Constants} from "@/backend/utils/Constants";

const authenticationMiddleware = (
    handler: (req: Request, res: NextApiResponse) => Promise<NextResponse<any> | NextResponse<{
        code: string;
        error: string
    }>>
) => {
    return async (req: Request, res: NextApiResponse) => {
        const token: string = req.headers.get(Constants.AUTHENTICATION_HEADER)?.replace('JWT ', '') || "";
        if(token == null || token === "")
            return errorHandler(new Error("Unauthorized"), req, res);
        const userId = await authenticationService.extractUserFromToken(token);
        if(userId == null)
            return errorHandler(new Error("Unauthorized"), req, res);
        req.headers.set(Constants.USER_ID_HEADER, userId);
        return handler(req, res);
    };
};

export default authenticationMiddleware;
