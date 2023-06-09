import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: '회원키' })
  uid: number;

  @ApiProperty({ description: '닉네임-이름' })
  unick: string;

  @ApiProperty({ description: '이메일' })
  email: string;

  @ApiProperty({ description: '프로필 썸네일' })
  pro_img: string;

  @ApiProperty({ description: '썸네일' })
  thumb_img: string;

  @ApiProperty({ description: '회원접근구분' })
  type: string;
}

export default CreateUserDto;
