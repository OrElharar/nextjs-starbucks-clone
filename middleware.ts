import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

export function middleware(req: Request, res: NextApiResponse) {
    const { method } = req;

    if (method === "OPTIONS") {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        res.setHeader("Access-Control-Max-Age", "86400");
        return NextResponse.next();
    } else {
        return NextResponse.next();
    }
}

export const config = {
    api: {
        bodyParser: true,
    },
};
