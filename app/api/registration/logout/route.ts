import { NextResponse } from "next/server";
import logger from "@/backend/utils/Logger";
import errorHandler from "@/app/api/_error";
import { NextApiResponse } from "next";
import authenticationMiddleware from "@/backend/middlewares/authenticationMiddleware";
import {Constants} from "@/backend/utils/Constants";

async function handler(req: Request, res: NextApiResponse) {
    try {
        logger.info(`/Logout successfully - userId: ${req.headers.get(Constants.USER_ID_HEADER)}`);
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return errorHandler(error, req, res);
    }
}

const POST = authenticationMiddleware(handler);

export { POST };
