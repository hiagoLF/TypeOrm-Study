import { validate } from 'class-validator';
import { Router } from 'express';
import { getRepository } from 'typeorm';
import Student from '../models/student';

const studentsRoutes = Router();

studentsRoutes.post('/', async (request, response) => {
  try {
    const studentsRepository = getRepository(Student);
    const newStudentToSave = studentsRepository.create(request.body);
    const errors = await validate(newStudentToSave);
    if (errors.length > 0) return response.json(errors);
    const newStudentResult = await studentsRepository.save(newStudentToSave);
    return response.json(newStudentResult);
  } catch (error) {
    return response.json(error.message);
  }
});

studentsRoutes.get('/', async (request, response) => {
  try {
    const studentsRepository = getRepository(Student);
    const studentsColectionResult = await studentsRepository.find({
      relations: ['classes'],
    });
    return response.json(studentsColectionResult);
  } catch (error) {
    return response.json(error.message);
  }
});

export default studentsRoutes;
