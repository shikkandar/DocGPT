import Router from 'express';
import userController from '../controllers/user-controller.js';
const appRouter = Router();
appRouter.post('/signup', userController.signupUser);
export default appRouter;
//# sourceMappingURL=user-routes.js.map