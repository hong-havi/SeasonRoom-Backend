import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  UserIdx: number;

  @ApiProperty({ description: '이름' })
  Name: string;

  @ApiProperty({ description: '닉네임' })
  Nick: string;

  @ApiProperty({ description: '이메일' })
  Email: string;

  @ApiProperty({ description: '프로필 이미지' })
  Profile_img: string;

  @ApiProperty({ description: '썸네일 이미지' })
  Thumb_img: string;

  @ApiProperty({ description: '계정 연동 키' })
  Account_Uid: string;

  @ApiProperty({ description: '계정 연동 정보' })
  Account_Type: string;
}
export default CreateUserDto;
