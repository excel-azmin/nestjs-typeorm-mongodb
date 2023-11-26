import { ObjectId } from 'mongodb';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ObjectIdColumn, OneToOne } from 'typeorm';

@Entity()
export class Profile {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  bio: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
