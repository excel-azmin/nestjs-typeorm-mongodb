import { ObjectId } from 'mongodb';
import { Student } from 'src/student/entities/student.entity';
import { Column, Entity, ManyToMany, ObjectIdColumn } from 'typeorm';

@Entity()
export class Course {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @ManyToMany(() => Student, (student) => student.courses)
  students: Student[];
}
