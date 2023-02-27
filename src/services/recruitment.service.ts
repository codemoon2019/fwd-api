import { CreateRecruiterApplicationDTO } from '@dtos/recruitment-form.dto';
import { HttpException } from '@exceptions/HttpException';
import { RecruitmentFormData } from '@interfaces/recruitment.interface';
import { Recruitments } from '@models/recruitment.model';
import { isEmpty } from '@utils/util';

class RecruitmentService {

  public async registerRecruitInfo(recruitmentData: CreateRecruiterApplicationDTO): Promise<CreateRecruiterApplicationDTO> {
    if (isEmpty(recruitmentData)) throw new HttpException(400, "recruitmentData is empty");

    const createRecruitmentData: RecruitmentFormData = await Recruitments.query()
      .insert({ ...recruitmentData })
      .into('recruits');

    return createRecruitmentData;
  }

  public async findAllRecruits(): Promise<CreateRecruiterApplicationDTO[]> {
    const recruits: RecruitmentFormData[] = await Recruitments.query().select().from('recruits').where('recruiter', '=', "");
    return recruits;
  }

  public async findAllAssignedRecruits(): Promise<CreateRecruiterApplicationDTO[]> {
    const recruits: RecruitmentFormData[] = await Recruitments.query().select().from('recruits').where('recruiter', '!=', "");
    return recruits;
  }

  public async assignAgent(recruitId: number, recruiter: string): Promise<RecruitmentFormData> {
    if (isEmpty(recruiter)) throw new HttpException(400, "provide the required fields");
    console.log(recruiter)
    const findRecruit = await Recruitments.query().select().from('recruits').where('id', '=', recruitId);
    if (!findRecruit) throw new HttpException(409, "This recruit does not exist.");

    await Recruitments.query()
      .update({ "recruiter": recruiter })
      .where('id', '=', recruitId)
      .into('recruits');

    const updateRecruitData = await Recruitments.query().select().from('recruits').where('id', '=', recruitId).first();
    return updateRecruitData;
  }

}

export default RecruitmentService;