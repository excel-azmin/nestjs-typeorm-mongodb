import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017, // Ensure the correct MongoDB port is used
      username: 'root',
      password: 'example',
      database: 'authz_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Define entities path
      useUnifiedTopology: true,
      useNewUrlParser: true,
      authSource: 'admin',
      logging: true, // Set to true for logging (optional)
    }),
    UserModule,
    ProfileModule,
    AuthorModule,
    BookModule,
    StudentModule,
    CourseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
