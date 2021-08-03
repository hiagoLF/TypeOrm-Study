import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Class from './Class';

@Entity('student')
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  key: string;

  @ManyToMany(type => Class, classe => classe.students)
  // JoinTable Especifica qual o lado que vai ser dono do relacionamento
  @JoinTable()
  classes: Class[];

  @CreateDateColumn()
  created_At: Date;

  @CreateDateColumn()
  updated_At: Date;
}
