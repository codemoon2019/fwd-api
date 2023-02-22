import { CreateRecruiterApplicationDTO } from '@dtos/recruitment-form.dto';
import { HttpException } from '@exceptions/HttpException';
import { RecruitmentFormData } from '@interfaces/recruitment.interface';
import { Recruitments } from '@models/recruitment.model';
import { isEmpty } from '@utils/util';

class RecruitmentService {

    public async registerRecruitInfo(recruitmentData: CreateRecruiterApplicationDTO ): Promise<CreateRecruiterApplicationDTO> {
        if (isEmpty(recruitmentData)) throw new HttpException(400, "recruitmentData is empty");
    
        const createRecruitmentData: RecruitmentFormData = await Recruitments.query()
          .insert({ ...recruitmentData })
          .into('recruits');
    
        return createRecruitmentData;
      }

}

export default RecruitmentService;