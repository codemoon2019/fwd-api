import { CreateBOPDTO } from '@dtos/bop.dto';
import { HttpException } from '@exceptions/HttpException';
import { BOP } from '@interfaces/bop.interface';
import { BOPModel } from '@models/bop.model';
import { isEmpty } from '@utils/util';

class BOPService {

    public async createNewBOP(bopData: CreateBOPDTO ): Promise<CreateBOPDTO> {
        if (isEmpty(bopData)) throw new HttpException(400, "bopData is empty");
    
        const createNewBOP: BOP = await BOPModel.query()
          .insert({ ...bopData })
          .into('bop');
    
        return createNewBOP;
      }

}

export default BOPService;