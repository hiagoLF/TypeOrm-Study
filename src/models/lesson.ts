import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Class from './Class';
import Content from './Content';

@Entity('lesson')
export default class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  // contet aqui tem o formato tipo Content e lesson lá em Content tem o tipo Lesson
  @OneToOne(type => Content, content => content.lesson)
  // JoinColumn indica que esta é a coluna que vai reter a chave de lesson
  // Pelo que eu entendi, define quem vai ser a tabela dominante
  @JoinColumn()
  content: Content;

  // eager traz os dados relacionados juntos. Não é recomendável colocar eager na
  // outra ponta quando existe um ManyToOne pois gera Erro: Maximum call stack size exceeded
  @ManyToOne(type => Class, classe => classe.lessons)
  @JoinColumn()
  classe: Class;

  @CreateDateColumn()
  created_At: Date;

  @CreateDateColumn()
  updated_At: Date;
}
