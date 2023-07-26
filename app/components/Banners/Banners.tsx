import {mockBanners} from "@/entities/interfaces/banner";
import Banner from "@/app/components/Banners/Banner/Banner";

import classes from './Banners.module.scss';
export default function Banners() {


    return (
        <div className={classes.bannersContainer}>
            {mockBanners.map((banner) => {
                return <Banner
                    key={banner.id}
                    id={banner.id}
                    callToActionText={banner.callToActionText}
                    imageUrl={banner.imageUrl}
                    imageAlt={banner.imageAlt}
                    title={banner.title}
                    description={banner.description}
                    backgroundColor={banner.backgroundColor}
                />
            })}
        </div>
    )
}
