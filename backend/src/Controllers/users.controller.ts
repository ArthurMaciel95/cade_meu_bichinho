import { Request, Response } from 'express';
import UsersModel from '../Models/Users.model';

class usersController {
  constructor() {}

  public async register(req: Request, res: Response): Promise<Response> {
    const user = await UsersModel.create(req.body); // create an user in database
    await user.save(); //save user in database
    return res.json(user);
  }

  public async users(req: Request, res: Response): Promise<Response> {
    const user = await UsersModel.find(); // return all user in database
    return res.json(user);
  }
}
export default new usersController();
