import { Router } from 'express';
import { getConnection, getRepository } from 'typeorm';
import Lesson from '../models/lesson';

const lessonsRoutes = Router();

lessonsRoutes.post('/', async (request, response) => {
  try {
    const lessonsRepository = getRepository(Lesson);
    const newLessonResult = await lessonsRepository.save(request.body);
    await getConnection().queryResultCache?.remove(['listDiscipline']);
    return response.json(newLessonResult);
  } catch (error) {
    return response.json(error.message);
  }
});

lessonsRoutes.get('/', async (request, response) => {
  try {
    const lessonsRepository = getRepository(Lesson);
    const lessonsColectionResult = await lessonsRepository.find({
      relations: ['classe', 'content'],
      cache: {
        id: 'listDiscipline',
        milliseconds: 10000,
      },
    });
    return response.json(lessonsColectionResult);
  } catch (error) {
    return response.json(error.message);
  }
});

export default lessonsRoutes;
