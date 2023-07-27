import classes from './Banner.module.scss';
import {IBanner} from "@/entities/interfaces/banner";
import {IBannerProps} from "@/app/components/Banners/Banner/props";

export default function Banner({banner, position, bannersClicksTracker}: IBannerProps) {
    const {id, callToActionText, imageUrl, imageAlt, title, description, backgroundColor} = banner;

    return (
        <div className={classes.bannerContainer}
                style={{backgroundColor: backgroundColor}}>
            <div className={classes.imageContainer}>
                <img
                    className={classes.bannerImage}
                    src={imageUrl}
                    alt={imageAlt}
                />
            </div>
           <div className={classes.infoContainer}>
               <div className={classes.bannerTitle}>
                   {title}
               </div>
               <div className={classes.bannerDescription}>
                   {description}
               </div>
               <div className={classes.callToActionContainer}>
                   <button onClick={()=>{
                          bannersClicksTracker({bannerId: id, position});
                   }}>
                       {callToActionText}
                   </button>
               </div>
           </div>
        </div>
    )
}
