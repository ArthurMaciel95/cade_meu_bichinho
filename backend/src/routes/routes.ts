import { Router, Response, Request } from 'express';
import animalsController from '../Controllers/animals.controller';
import usersController from '../Controllers/users.controller';
const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    status: 200,
    response: 'ok',
  });
});
router.get('/users', usersController.users);
router.post('/register', usersController.register);

router.get('/animals', animalsController.findAll);
router.post('/animals', animalsController.register);

export default router;
