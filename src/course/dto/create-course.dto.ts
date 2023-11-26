import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty({
    example: 'Course Name',
    description: 'The name of the course',
  })
  readonly name: string;
}
