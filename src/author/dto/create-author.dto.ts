import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the author' })
  readonly name: string;
}
