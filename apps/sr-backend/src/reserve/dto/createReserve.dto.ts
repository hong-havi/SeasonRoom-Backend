import { ApiProperty } from '@nestjs/swagger';

export class CreateReserveDto {
  @ApiProperty({ description: '회원키' })
  ReserveUno!: number;

  @ApiProperty({ description: '예약일자' })
  ReserveDate!: string;
}
