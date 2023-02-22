import { NextFunction, Request, Response } from 'express';
import { CreateRecruiterApplicationDTO } from '@dtos/recruitment-form.dto';
import recruitmentService from '@services/recruitment.service';

class RecruitmentController {
  public recruitmentService = new recruitmentService();

  public registerRecruit = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const recruitData: CreateRecruiterApplicationDTO = req.body;
      const registeredRecruitData = await this.recruitmentService.registerRecruitInfo(recruitData);

      res.status(201).json({ data: registeredRecruitData, message: 'registered' });
    } catch (error) {
      next(error);
    }
  };
}

export default RecruitmentController;