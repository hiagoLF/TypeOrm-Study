import { Router } from 'express';
import { getRepository } from 'typeorm';
import Content from '../models/Content';

const contentRoutes = Router();

contentRoutes.post('/', async (request, response) => {
  try {
    const contentRepository = getRepository(Content);
    const newContentResult = await contentRepository.save(request.body);
    return response.json(newContentResult);
  } catch (error) {
    return response.json(error.message);
  }
});

contentRoutes.get('/', async (request, response) => {
  try {
    const contentRepository = getRepository(Content);
    const contentsColectionResult = await contentRepository.find({
      relations: ['lesson'],
    });
    return response.json(contentsColectionResult);
  } catch (error) {
    return response.json(error.message);
  }
});

export default contentRoutes;
