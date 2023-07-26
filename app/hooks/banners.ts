'use client';

import {useEffect, useState} from "react";
import httpService from "@/utils/HttpService/HttpService";

export function useBanners() {
    const [banners, setBanners] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        httpService.getBanners().then(({err, data}) => {
            setLoading(false);
            if (err) {
                setError(err.message);
                return;
            }
            if(data == null || data.data == null) {
                setError("No data received");
                return;
            }

            setBanners(data.data.banners);
        });
    }, []);

    const bannersClicksTracker = async ({bannerId, position}:{bannerId: string, position: number}) => {
        const {err} = await httpService.clickBanner({bannerId, position});
        if(err != null)
            setError(err.message);
    }

    return { banners, loading, error, bannersClicksTracker };
}
