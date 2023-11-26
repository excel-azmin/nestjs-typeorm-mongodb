import { ObjectId } from 'mongodb';
import { Course } from 'src/course/entities/course.entity';
import { Column, Entity, JoinTable, ManyToMany, ObjectIdColumn } from 'typeorm';

@Entity()
export class Student {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @ManyToMany(() => Course, (course) => course.students)
  @JoinTable()
  courses: Course[];
}
