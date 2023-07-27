'use client';

import {useContext, useEffect, useState} from "react";
import httpService from "@/utils/HttpService/HttpService";
import {AlertContext} from "@/app/contexts/alert/AlertContext";

export function useBanners() {
    const [banners, setBanners] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const { error, announceActivityTracked } = useContext(AlertContext)
    useEffect(() => {
        setLoading(true);
        httpService.getBanners().then(({err, data}) => {
            setLoading(false);
            if (err) {
                error(err.message);
                return;
            }
            if(data == null || data.data == null) {
                error("No data received");
                return;
            }

            setBanners(data.data.banners);
        });
    }, []);

    const bannersClicksTracker = async ({bannerId, position}:{bannerId: string, position: number}) => {
        const {err} = await httpService.clickBanner({bannerId, position});
        if(err != null) {
            error(err.message);
        }
        announceActivityTracked();
    }

    return { banners, loading, error, bannersClicksTracker };
}
