import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileDto {
  @ApiProperty({
    example: 'Some bio text',
    description: 'The biography of the user',
  })
  readonly bio: string;
}
