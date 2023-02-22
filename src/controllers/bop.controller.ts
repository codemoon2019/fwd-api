import { NextFunction, Request, Response } from 'express';
import { CreateBOPDTO } from '@dtos/bop.dto';
import bopService from '@services/bop.service';

class BOPController {
  public recruitmentService = new bopService();

  public createNewBOP = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const bopData: CreateBOPDTO = req.body;
      const newBOPData = await this.recruitmentService.createNewBOP(bopData);

      res.status(201).json({ data: newBOPData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default BOPController;