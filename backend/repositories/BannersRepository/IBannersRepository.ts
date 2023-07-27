import {IBanner} from "@/entities/interfaces/banner";

export interface IBannersRepository{
    getAll: () => Promise<IBanner[]>;
    insertBannerClick: ({bannerId, position}: {bannerId: string, position: number}) => Promise<void>;
}
