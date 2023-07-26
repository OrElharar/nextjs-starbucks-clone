import errorHandler from "@/app/api/_error";
import {NextApiResponse} from "next";
import {bannersService} from "@/backend/services/BannersService";
import {NextResponse} from "next/server";
import logger from "@/backend/utils/Logger";

export async function GET(req: Request, res: NextApiResponse){
    try{
        const banners = await bannersService.getAll();
        logger.info(`/banners returned with #${banners.length} successfully`);
        return NextResponse.json({ data: {banners} });
    }catch (err){
        return errorHandler(err, req, res)
    }
}
