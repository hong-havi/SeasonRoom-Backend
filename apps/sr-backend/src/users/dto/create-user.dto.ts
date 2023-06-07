import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: '이름' })
  firstName!: string;

  @ApiProperty({ description: '성' })
  lastName!: string;
}
