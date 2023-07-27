import {bannersRepository} from "@/backend/repositories/BannersRepository/BannersRepository";
import {IBanner} from "@/entities/interfaces/banner";
import {CustomError} from "@/backend/models/CustomError";
import {IBannersRepository} from "@/backend/repositories/BannersRepository/IBannersRepository";
import {IBannersService} from "@/backend/services/BannersService/IBannersService";


class BannersService implements IBannersService{
    private bannersRepository: IBannersRepository;
    constructor(bannersRepository: IBannersRepository) {
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
