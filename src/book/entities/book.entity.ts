import { ObjectId } from 'mongodb';
import { Author } from 'src/author/entities/author.entity';
import { Column, Entity, ManyToOne, ObjectIdColumn } from 'typeorm';

@Entity()
export class Book {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  title: string;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;
}
