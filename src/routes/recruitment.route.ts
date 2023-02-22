import { Router } from 'express';
import RecruitmentController from '@controllers/recruitment.controller';
import { CreateRecruiterApplicationDTO } from '@dtos/recruitment-form.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class RecruitmentRoute implements Routes {
  public path = '/recruitment';
  public router = Router();
  public recruitmentController = new RecruitmentController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, validationMiddleware(CreateRecruiterApplicationDTO, 'body'), this.recruitmentController.registerRecruit);
  }
}

export default RecruitmentRoute;
