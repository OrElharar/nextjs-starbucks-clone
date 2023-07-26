'use client';

import Banner from "@/app/components/Banners/Banner/Banner";
import classes from './Banners.module.scss';
import {useBanners} from "@/app/hooks/banners";
export default function Banners() {
const {banners, bannersClicksTracker} = useBanners();

    return (
        <div className={classes.bannersContainer}>
            {banners.map((banner, index) => {
                return <Banner
                    key={banner.id}
                    banner={banner}
                    bannersClicksTracker={bannersClicksTracker}
                    position={index}
                />
            })}
        </div>
    )
}
