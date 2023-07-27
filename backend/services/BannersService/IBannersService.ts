import {IBanner} from "@/entities/interfaces/banner";

export interface IBannersService{
    getAll: () => Promise<IBanner[]>;
    addBannerClick: ({bannerId, position}: {bannerId?: string, position?: number}) => Promise<void>;
}
