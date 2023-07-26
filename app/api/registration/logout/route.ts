import { NextResponse } from "next/server";
import logger from "@/backend/utils/Logger";
import errorHandler from "@/app/api/_error";
import {NextApiResponse} from "next";

export async function POST(req: Request, res: NextApiResponse) {
    try {
        const body = await req.json()
        const data = body;
        console.log("Parsed JSON data:", data);
        logger.info(`Logout data.test: ${data.test}`);

        return NextResponse.json({message: "Logout success"});
    } catch (error) {
        return errorHandler(error, req, res);
    }
}
