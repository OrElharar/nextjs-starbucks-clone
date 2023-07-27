import errorHandler from "@/app/api/_error";
import {NextApiResponse} from "next";
import {bannersService} from "@/backend/services/BannersService/BannersService";
import {NextResponse} from "next/server";
import logger from "@/backend/utils/Logger";

export async function POST(req: Request, res: NextApiResponse){
    try{
        const data = await req.json();
        await bannersService.addBannerClick(data);
        logger.info(`/banners/clicks ended successfully`);
        return NextResponse.json({ data: {} });
    }catch (err){
        return errorHandler(err, req, res)
    }
}
