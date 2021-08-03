import { Router } from 'express';
import { getCustomRepository, getRepository, Like } from 'typeorm';
import Class from '../models/Class';
import ClassRepository from '../repositories/classRepository';

const classRoutes = Router();

classRoutes.post('/', async (request, response) => {
  try {
    const classRepository = getRepository(Class);
    const newClassResult = await classRepository.save(request.body);
    return response.json(newClassResult);
  } catch (error) {
    return response.json(error.message);
  }
});

classRoutes.get('/', async (request, response) => {
  try {
    const classRepository = getRepository(Class);
    const classesColectionResult = await classRepository.find({
      relations: ['lessons', 'students'],
    });
    return response.json(classesColectionResult);
  } catch (error) {
    return response.json(error.message);
  }
});

classRoutes.get('/:name', async (request, response) => {
  try {
    const classRepository = getCustomRepository(ClassRepository);
    const searchedClassesResult = await classRepository.findByName(
      request.params.name,
    );
    return response.json(searchedClassesResult);
  } catch (error) {
    return response.json(error.message);
  }
});

export default classRoutes;
