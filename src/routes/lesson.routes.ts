import { Router } from 'express';
import { getRepository } from 'typeorm';
import Lesson from '../models/Lesson';

const lessonsRoutes = Router();

lessonsRoutes.post('/', async (request, response) => {
  try {
    const lessonsRepository = getRepository(Lesson);
    const newLessonResult = await lessonsRepository.save(request.body);
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
    });
    return response.json(lessonsColectionResult);
  } catch (error) {
    return response.json(error.message);
  }
});

export default lessonsRoutes;
