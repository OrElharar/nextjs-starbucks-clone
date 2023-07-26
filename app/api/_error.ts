import logger from "@/backend/utils/Logger";
import { CustomError } from "@/backend/models/CustomError";
import {NextResponse} from "next/server";
import {NextApiResponse} from "next";

export default function errorHandler(error: unknown, req: Request, res: NextApiResponse) {
    logger.error(error instanceof Error ? error.message : "Unknown error");
    const err = error instanceof CustomError ? error : new CustomError("Error");
    return NextResponse.json({ error: {message: err.message, code: err.code} }, { status: err.status })
}
