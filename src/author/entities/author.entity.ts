import { ObjectId } from 'mongodb';
import { Book } from 'src/book/entities/book.entity';
import { Column, Entity, ObjectIdColumn, OneToMany } from 'typeorm';

@Entity()
export class Author {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
