import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Lesson from './Lesson';

@Entity('content')
export default class Content {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Lesson, lesson => lesson.content)
  lesson: Lesson;

  @Column()
  description: string;

  @Column({ nullable: true })
  linkContent: string;
}
