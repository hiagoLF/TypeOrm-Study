import { Router } from 'express';
import classRoutes from './class.routes';
import contentRoutes from './content.routes';
import lessonsRoutes from './lesson.routes';
import studentsRoutes from './student.routes';

const routes = Router();

routes.use('/class', classRoutes);
routes.use('/content', contentRoutes);
routes.use('/lesson', lessonsRoutes);
routes.use('/student', studentsRoutes);

export default routes;
