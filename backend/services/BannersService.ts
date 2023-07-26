import {bannersRepository, BannersRepository} from "@/backend/repositories/BannersRepository/BannersRepository";
import {IBanner} from "@/entities/interfaces/banner";
import {CustomError} from "@/backend/models/CustomError";

export class BannersService{
    private bannersRepository: BannersRepository;
    constructor(bannersRepository: BannersRepository) {
        this.bannersRepository = bannersRepository;
    }

    async getAll(){
        const banners: IBanner[] =  await this.bannersRepository.getAll();
        if(banners.length === 0)
            throw new CustomError("No banners found");
        return banners;
    }

    async addBannerClick({bannerId, position}: {bannerId?: string,  position?: number}): Promise<void>{
        if(bannerId == null || position == null)
            throw new CustomError("Missing parameters - server expected bannerId, userId and position");
        await this.bannersRepository.insertBannerClick({bannerId, position});
    }
}

export const bannersService = new BannersService(bannersRepository);
