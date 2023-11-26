import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({
    example: 'The Book Title',
    description: 'The title of the book',
  })
  readonly title: string;

  @ApiProperty({
    example: '123456789012345678901234',
    description: 'The ID of the author',
  })
  readonly authorId: string; // Assuming you use a string representation of the author's ObjectId
}
