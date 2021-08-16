import { Request, Response } from 'express';
import AnimalsModel from '../Models/AnimalsModel';

class animalsController {
  constructor() {}

  public async register(req: Request, res: Response): Promise<Response> {
    const animal = await AnimalsModel.create(req.body); //create animal in database
    await animal.save();
    return res.json(animal);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const animal = await AnimalsModel.find(); //create animal in database

    return res.json(animal);
  }
}
export default new animalsController();
