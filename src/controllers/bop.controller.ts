import { NextFunction, Request, Response } from 'express';
import { CreateBOPDTO } from '@dtos/bop.dto';
import bopService from '@services/bop.service';

class BOPController {
  public bopService = new bopService();

  public createNewBOP = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const bopData: CreateBOPDTO = req.body;
      const newBOPData = await this.bopService.createNewBOP(bopData);

      res.status(201).json({ data: newBOPData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public getAllBops = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllBops = await this.bopService.findAllBop();

      res.status(200).json({ data: findAllBops, message: 'findAllBop' });
    } catch (error) {
      next(error);
    }
  };

  public getAllBopFilterByCurrentDate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllBopFilterByCurrentDate = await this.bopService.findAllBopFilterByCurrentDate();

      res.status(200).json({ data: findAllBopFilterByCurrentDate, message: 'findAllBopFilterByCurrentDate' });
    } catch (error) {
      next(error);
    }
  };

}

export default BOPController;