import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAuthorDto } from './create-author.dto';

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {
  @ApiProperty({
    example: 'John Doe',
    description: 'The updated name of the author',
  })
  readonly name: string;
}
