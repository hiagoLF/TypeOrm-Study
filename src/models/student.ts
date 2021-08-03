import { IsEmail, Max, MaxLength, Min, MinLength } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Class from './Class';
import MyCrypto from '../helpers/crypto';

@Entity('student')
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @MaxLength(50, { message: 'I need a smaller name' })
  @MinLength(5, { message: 'I need a larger name' })
  @Column()
  name: string;

  @Max(999999, { message: 'I need a smaller key' })
  @Min(100000, { message: 'I need a larger key' })
  @Column()
  key: number;

  @IsEmail()
  @Column({
    type: 'varchar',
    nullable: false,
    transformer: MyCrypto,
  })
  email: string;

  @ManyToMany(() => Class, classe => classe.students)
  // JoinTable Especifica qual o lado que vai ser dono do relacionamento
  @JoinTable()
  classes: Class[];

  @CreateDateColumn()
  created_At: Date;

  @CreateDateColumn()
  updated_At: Date;
}
