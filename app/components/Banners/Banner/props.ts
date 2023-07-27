import {IBanner} from "@/entities/interfaces/banner";

export interface IBannerProps {
    banner: IBanner;
    position: number;
    bannersClicksTracker: ({bannerId, position}: {bannerId: string, position: number}) => void;
}
